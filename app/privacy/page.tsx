import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <div className="prose prose-lg">
        <p className="text-sm italic">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4 my-6">
          <h2 className="text-xl font-bold text-blue-300 mt-0">We Do Not Collect Your Data</h2>
          <p className="mb-0">
            Our Text to Speech service is designed with your privacy in mind. We do not collect, store, or process any 
            of the text content you convert to speech. All text-to-speech conversion happens entirely in your browser.
          </p>
        </div>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">1. Introduction</h2>
        <p>
          Welcome to our Text to Speech service. This Privacy Policy explains how we handle information when you 
          visit our website (collectively, the &quot;Site&quot;).
        </p>
        
        <p>
          Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
          please do not access the site.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">2. How We Respect Your Privacy</h2>
        <p>
          Our commitment to your privacy includes the following principles:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>No Text Storage:</strong> The text you enter for conversion is never stored on our servers</li>
          <li><strong>No User Accounts:</strong> We don&apos;t require accounts, so we don&apos;t collect personal information</li>
          <li><strong>Local Processing:</strong> Audio conversion happens within your browser</li>
          <li><strong>Minimal Technical Data:</strong> We only collect anonymous usage statistics necessary for site operation</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-4 mb-2">Limited Usage Data</h3>
        <p>
          We collect only minimal anonymous information on how the Service is accessed (&quot;Usage Data&quot;). This Usage Data 
          may include information such as your computer&apos;s Internet Protocol address, browser type, 
          and the pages visited. This information cannot be used to identify you personally.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">3. How We Use Limited Usage Data</h2>
        <p>
          The limited anonymous usage data we collect is only used to:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Ensure site stability and security</li>
          <li>Improve accessibility features</li>
          <li>Detect and address technical issues</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">4. Third-Party Advertisers</h2>
        <p>
          We use Google AdSense to support our free service. Google AdSense may use cookies and similar technologies
          to serve ads. Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your visit to our site.
          To opt out of personalized advertising, visit <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:underline">Google Ads Settings</a>.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">5. Data Security</h2>
        <p>
          Since we do not collect or store your text input or generated speech, there is no risk of this data being compromised.
          For the limited anonymous usage data we collect, we implement standard security measures to protect this information.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">6. Children&apos;s Privacy</h2>
        <p>
          Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable 
          information from anyone under the age of 13.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">7. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
          Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at <a href="mailto:dinkarhimanshu78@gmail.com" className="text-blue-600 hover:underline">dinkarhimanshu78@gmail.com</a>.
        </p>
      </div>
    </div>
  );
} 