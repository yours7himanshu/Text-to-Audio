import React from 'react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-blue-400">About Our Text to Speech Service</h1>
      
      <div className="prose prose-lg text-gray-200 max-w-none">
        <div className="bg-gray-800/50 rounded-lg p-6 shadow-lg border border-gray-700 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">Our Mission</h2>
          <p>
            Welcome to our Text to Speech service. We provide an easy-to-use platform that converts written text 
            into natural-sounding speech using advanced text-to-speech technology.
          </p>
          
          <p className="mt-4">
            Our mission is to make digital content more accessible to everyone, including those with reading difficulties, 
            visual impairments, or people who simply prefer audio content over reading. We believe that technology 
            should break down barriers, not create them.
          </p>
        </div>
        
        <div className="bg-gray-800/50 rounded-lg p-6 shadow-lg border border-gray-700 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">Our Story</h2>
          <p>
            Founded in 2025, our team of language enthusiasts and accessibility advocates came together with a shared vision: 
            to create a tool that bridges the gap between written and spoken content. We believe that everyone should have equal 
            access to information regardless of their reading abilities.
          </p>
          
          <p className="mt-4">
            After months of development and testing with users from diverse backgrounds, including people with visual impairments 
            and learning differences, we launched our free text-to-speech service. Our goal was to create something that was not 
            only functional but also intuitive and enjoyable to use.
          </p>
        </div>
        
        <div className="bg-gray-800/50 rounded-lg p-6 shadow-lg border border-gray-700 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">How We&apos;re Different</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-white">Privacy-Focused</h3>
              <p className="text-gray-300">
                Unlike many services that collect and store your data, our text-to-speech converter never saves your 
                text inputs. Everything happens in your browser, ensuring your information remains private.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white">Accessibility First</h3>
              <p className="text-gray-300">
                We built our service with accessibility as a core principle, not an afterthought. Our interface 
                is designed to work well with screen readers and keyboard navigation.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white">English Optimized</h3>
              <p className="text-gray-300">
                Our service is specifically optimized for clear American English pronunciation, providing 
                the highest quality speech output.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white">Zero Cost, Zero Compromise</h3>
              <p className="text-gray-300">
                We believe accessibility tools should be available to everyone. That&apos;s why our service is 
                completely free with no hidden fees or premium tiers.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800/50 rounded-lg p-6 shadow-lg border border-gray-700 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">Our Technology</h2>
          <p>
            Our text-to-speech service uses Google&apos;s Open Source Text-to-Speech (gTTS) technology to convert written text into 
            audio. The technology works by:
          </p>
          
          <ol className="list-decimal pl-6 mt-4 space-y-2">
            <li>Analyzing the text to understand its structure, including punctuation and formatting</li>
            <li>Processing the text through language-specific models to ensure proper pronunciation</li>
            <li>Generating audio speech patterns, including appropriate pauses and intonation</li>
            <li>Delivering the audio directly to your browser for immediate playback or download</li>
          </ol>
          
          <p className="mt-4">
            We continuously work to improve our text-to-speech algorithms and enhance the naturalness of the generated speech for American English.
          </p>
        </div>
        
        <div className="bg-gray-800/50 rounded-lg p-6 shadow-lg border border-gray-700">
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">Contact Us</h2>
          <p>
            We value your feedback and are committed to improving our service. If you have questions, suggestions, 
            or encounter any issues while using our text-to-speech converter, please don&apos;t hesitate to reach out.
          </p>
          
          <p className="mt-4">
            Contact us at <a href="mailto:dinkarhimanshu78@gmail.com" className="text-blue-400 hover:underline">dinkarhimanshu78@gmail.com</a>
          </p>
          
          <div className="mt-6 pt-4 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              Whether you&apos;re using our service for accessibility needs, language learning, multitasking, or any other purpose, 
              we&apos;re honored to be part of your journey. Thank you for choosing our Text to Speech converter.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 