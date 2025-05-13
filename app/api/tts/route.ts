import { NextResponse } from 'next/server';
import gtts from 'gtts';

export async function POST(req: Request) {
  try {
    const { text, language } = await req.json();
    
    if (!text || !language) {
      return NextResponse.json(
        { error: 'Text and language are required' },
        { status: 400 }
      );
    }

    const tts = new gtts(text, language);
    
    // Convert to base64
    const audioBase64 = await new Promise((resolve, reject) => {
      const audioData: Buffer[] = [];
      tts.stream()
        .on('data', (chunk: Buffer) => audioData.push(chunk))
        .on('end', () => {
          const buffer = Buffer.concat(audioData);
          resolve(buffer.toString('base64'));
        })
        .on('error', reject);
    });

    return NextResponse.json({ audioBase64 });
  } catch (error) {
    console.error('TTS Error:', error);
    return NextResponse.json(
      { error: 'Failed to convert text to speech' },
      { status: 500 }
    );
  }
} 