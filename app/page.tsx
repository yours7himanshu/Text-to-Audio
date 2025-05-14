'use client'

import { useState } from "react";

const LANGUAGES = {
  'en-US': 'English (US)',
 
}

const Home = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState('en-US');
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
          language: selectedLanguage,
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
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100 py-8 px-4">
      <div className="w-full max-w-4xl mx-auto mt-24  ">
        <header>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4 text-center">
            Free Text to Audio Converter
          </h1>
          <p className="text-lg max-md:text-sm text-center mb-8 text-gray-300">
            Convert any text to Audio easily and quickly.
          </p>
        </header>
        
        <div className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden border border-gray-700">
          <div className="p-6">
            <form onSubmit={handleConvert} className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="language-select" className="block text-sm font-medium text-gray-300 mb-2">
                    Language
                  </label>
                  <select
                    id="language-select"
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-100"
                    aria-label="Select language"
                  >
                    {Object.entries(LANGUAGES).map(([code, name]) => (
                      <option key={code} value={code} className="bg-gray-700">
                        {name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-end">
                  <button
                    type="submit"
                    disabled={loading || !text}
                    className={`w-full px-4 py-2 rounded-lg font-medium transition-all duration-200
                      ${loading || !text 
                        ? 'bg-gray-600 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-700 transform hover:-translate-y-1'}`}
                    aria-label="Convert text to speech"
                  >
                    {loading ? 'Converting...' : 'Convert →'}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="text-input" className="block text-sm font-medium text-gray-300 mb-2">
                  Text Input
                </label>
                <textarea
                  id="text-input"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Enter your text here..."
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
                <h2 className="sr-only">Generated Audio</h2>
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
        
        <div className=" text-center mt-24 text-gray-400">
          <h2 className="text-xl font-semibold mb-2 text-blue-300">Why Use Our Text to Speech Tool?</h2>
          <ul className="list-none space-y-2 max-w-2xl mx-auto">
            <li>✓ <strong>Completely Free</strong> - No hidden fees or limits</li>
            <li>✓ <strong>100% Private</strong> - We do not collect or store any user data</li>
            <li>✓ <strong>Accessible Design</strong> - Built for everyone, including visually impaired users</li>
            <li>✓ <strong>No Sign-up Required</strong> - Convert text immediately with no account needed</li>
          </ul>
          
          <p className="mt-4  text-gray-400 border-t border-gray-700 pt-4 max-w-2xl mx-auto">
            Your privacy matters to us. We do not track, store, or collect any of your text inputs or generated audio files.
            All conversions happen in your browser, and your data is never sent to our servers for storage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;