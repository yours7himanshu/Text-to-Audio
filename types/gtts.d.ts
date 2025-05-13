declare module 'gtts' {
  export default class gTTS {
    constructor(text: string, language: string);
    stream(): NodeJS.ReadableStream;
  }
} 