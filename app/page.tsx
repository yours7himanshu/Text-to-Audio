'use client'

import { useState } from "react";
import Link from "next/link";

const Home = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [error, setError] = useState('');

  const handleConvert = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setAudioUrl(null);

    try {
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
          language: 'en-US',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to convert text to speech');
      }

      const data = await response.json();
      const audioData = data.audioBase64;
      const blob = new Blob(
        [Uint8Array.from(atob(audioData), c => c.charCodeAt(0))],
        { type: 'audio/mp3' }
      );
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to convert text to speech. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!audioUrl) return;
    
    const a = document.createElement('a');
    a.href = audioUrl;
    a.download = 'converted-audio.mp3';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section className="flex flex-col items-center justify-start bg-gray-900 text-gray-100 py-8 px-4">
      <div className="w-full max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
            Free Text to Speech Converter
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Convert any text to  speech in English - completely free.
            Our tool is designed to help visually impaired users and anyone who prefers listening over reading.
          </p>
        </header>
        
        <div className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden border border-gray-700 mb-12">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-center text-blue-400 mb-6">Convert Your Text to Audio</h2>
            <form onSubmit={handleConvert} className="space-y-6">
              <div>
                <button
                  type="submit"
                  disabled={loading || !text}
                  className={`w-full px-4 py-2 rounded-lg font-medium transition-all duration-200
                    ${loading || !text 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700 transform hover:-translate-y-1'}`}
                  aria-label="Convert text to speech"
                >
                  {loading ? 'Converting...' : 'Convert to Speech →'}
                </button>
              </div>

              <div>
                <label htmlFor="text-input" className="block text-sm font-medium text-gray-300 mb-2">
                  Enter Your Text
                </label>
                <textarea
                  id="text-input"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Type or paste your text here to convert to speech..."
                  className="w-full h-48 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-100 placeholder-gray-400"
                  required
                  aria-label="Text to convert to speech"
                />
              </div>
            </form>

            {error && (
              <div className="mt-6 px-4 py-3 bg-red-900/50 border border-red-700 text-red-200 rounded-lg" role="alert" aria-live="assertive">
                {error}
              </div>
            )}

            {audioUrl && (
              <div className="mt-6 space-y-4">
                <h3 className="text-xl font-semibold text-green-400">Your Speech is Ready!</h3>
                <div className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                  <audio controls className="w-full">
                    <source src={audioUrl} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>

                <button
                  onClick={handleDownload}
                  className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-200 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                  aria-label="Download MP3 file"
                >
                  <span>Download MP3</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800/50 rounded-lg p-6 shadow-lg border border-gray-700">
            <h2 className="text-xl font-semibold text-blue-300 mb-4">How It Works</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Enter your text in the box above</li>
              <li>Click the &quot;Convert&quot; button</li>
              <li>Listen to the generated speech</li>
              <li>Download the audio file if needed</li>
            </ol>
            <p className="mt-4 text-gray-400">
              The conversion process happens instantly, with no delays or waiting times.
              Start converting your text to speech right away!
            </p>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-6 shadow-lg border border-gray-700">
            <h2 className="text-xl font-semibold text-blue-300 mb-4">Use Cases</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Accessibility</strong>: Help visually impaired users access written content</li>
              <li><strong>Learning</strong>: Improve pronunciation and language skills</li>
              <li><strong>Multitasking</strong>: Listen to articles while doing other activities</li>
              <li><strong>Content Creation</strong>: Create voiceovers for videos or presentations</li>
              <li><strong>Proofreading</strong>: Hear your content to catch errors</li>
            </ul>
            <p className="mt-4 text-gray-400">
              Our tool is designed for everyday use by anyone who needs text-to-speech conversion.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-800/50 rounded-lg p-6 shadow-lg border border-gray-700 mb-12">
          <h2 className="text-xl font-semibold text-blue-300 mb-4 text-center">Why Choose Our Text to Speech Tool?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="list-none space-y-4">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <div>
                  <strong className="text-white">100% Free</strong>
                  <p className="text-gray-400 text-sm">No hidden fees, subscriptions, or usage limits</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <div>
                  <strong className="text-white">Completely Private</strong>
                  <p className="text-gray-400 text-sm">We don&apos;t collect or store any of your text data</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <div>
                  <strong className="text-white">High-Quality Audio</strong>
                  <p className="text-gray-400 text-sm">Clear, natural-sounding speech output</p>
                </div>
              </li>
            </ul>
            <ul className="list-none space-y-4">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <div>
                  <strong className="text-white">No Sign-up Required</strong>
                  <p className="text-gray-400 text-sm">Use immediately without creating an account</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <div>
                  <strong className="text-white">Accessible Design</strong>
                  <p className="text-gray-400 text-sm">Built with accessibility in mind for all users</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <div>
                  <strong className="text-white">English (US) Optimized</strong>
                  <p className="text-gray-400 text-sm">Specifically tuned for clear American English pronunciation</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="mt-6 border-t border-gray-700 pt-4">
            <p className="text-gray-400 text-center">
              Your privacy matters to us. We do not track, store, or collect any of your text inputs or generated audio files.
              All conversions happen in your browser, and your data is never sent to our servers for storage.
            </p>
            <p className="text-gray-400 text-center mt-2">
              Powered by Google&apos;s Text-to-Speech (gTTS) technology.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-800/50 rounded-lg p-6 shadow-lg border border-gray-700">
          <h2 className="text-xl font-semibold text-blue-300 mb-4 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-white">Is this service really free?</h3>
              <p className="text-gray-400">Yes, our text-to-speech converter is completely free to use with no restrictions or limits.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">Do you store the text I convert?</h3>
              <p className="text-gray-400">No, we do not store any of the text you input or the audio files that are generated. Your privacy is our priority.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">Can I use the generated audio files commercially?</h3>
              <p className="text-gray-400">Yes, the audio files you generate are yours to use for personal or commercial purposes.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">Is there a limit to how much text I can convert?</h3>
              <p className="text-gray-400">There are some technical limitations based on your browser&apos;s capabilities, but for most typical use cases, you can convert substantial amounts of text.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">How can I report issues or request features?</h3>
              <p className="text-gray-400">You can contact us through our <Link href="/about" className="text-blue-400 hover:underline">About page</Link> with any feedback, issues, or feature requests.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;