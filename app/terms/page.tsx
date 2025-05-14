import React from 'react';

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      
      <div className="prose prose-lg">
        <p className="text-sm italic">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <div className="bg-green-900/30 border border-green-700 rounded-lg p-4 my-6">
          <h2 className="text-xl font-bold text-green-300 mt-0">Your Privacy is Protected</h2>
          <p className="mb-0">
            We do not collect, store, or process the text you convert to speech. Your data remains private and 
            is never saved on our servers. See our complete <a href="/privacy" className="text-blue-400 hover:underline">Privacy Policy</a> for details.
          </p>
        </div>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">1. Introduction</h2>
        <p>
          Welcome to our free Text to Speech service. These Terms of Service govern your access to and use 
          of our website. By accessing or using the service, you agree to be bound by these Terms.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">2. Service Description</h2>
        <p>
          We provide a free text-to-speech conversion service primarily designed to assist visually impaired 
          individuals. Our service converts written text into spoken audio without storing your content during or after conversion.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">3. Free Service</h2>
        <p>
          Our text-to-speech service is provided completely free of charge. We sustain this service through 
          advertisements displayed on the site. There are no hidden fees or premium tiers.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">4. Privacy and Data Protection</h2>
        <p>
          We are committed to protecting your privacy. When using our service:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Your text inputs are never stored on our servers</li>
          <li>The audio files generated remain private to your browser session</li>
          <li>No personal information is required to use our service</li>
          <li>All text processing happens locally in your browser</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">5. User Conduct</h2>
        <p>
          By using the Site, you agree not to:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Use the service for any illegal purpose</li>
          <li>Attempt to bypass or disable advertisements</li>
          <li>Use the service in any way that could disable or overburden the site</li>
          <li>Use automated methods to submit excessive requests</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">6. Intellectual Property</h2>
        <p>
          The website and its original content remain the property of the service 
          operators. The audio files you generate are yours to use for personal, educational, or accessibility purposes.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">7. Disclaimer</h2>
        <p>
          THE SERVICE IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND. We do not guarantee that the service 
          will be uninterrupted or error-free. The audio quality and accuracy may vary.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">8. Limitation of Liability</h2>
        <p>
          We shall not be liable for any indirect, incidental, special, or consequential damages resulting from 
          the use or inability to use the service.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">9. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. Continued use of the Service after any such 
          changes constitutes your acceptance of the new Terms.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">10. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at <a href="mailto:dinkarhimanshu78@gmail.com" className="text-blue-600 hover:underline">dinkarhimanshu78@gmail.com</a>.
        </p>
      </div>
    </div>
  );
} 