import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <div className="prose prose-lg">
        <p className="text-sm italic">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">1. Introduction</h2>
        <p>
          Welcome to our Text to Speech service. This Privacy Policy explains how we collect, use, disclose, 
          and safeguard your information when you visit our website (collectively, the &quot;Site&quot;).
        </p>
        
        <p>
          Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
          please do not access the site.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">2. Collection of Your Information</h2>
        <p>
          We collect minimal information necessary to provide our free text-to-speech service:
        </p>
        
        <h3 className="text-xl font-semibold mt-4 mb-2">Usage Data</h3>
        <p>
          We may collect information on how the Service is accessed and used (&quot;Usage Data&quot;). This Usage Data 
          may include information such as your computer&apos;s Internet Protocol address, browser type, 
          browser version, the pages of our Service that you visit, and the time spent on those pages.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">3. Use of Your Information</h2>
        <p>
          We use the information we collect about you only to:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Provide and maintain our free Service</li>
          <li>Monitor usage to ensure site stability</li>
          <li>Improve accessibility features</li>
          <li>Detect and address technical issues</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">4. Third-Party Advertisers</h2>
        <p>
          We use Google AdSense to support our free service. Google AdSense may use cookies and similar technologies
          to serve ads based on your prior visits to our website or other websites. To opt out of personalized advertising, 
          visit <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:underline">Google Ads Settings</a>.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">5. Data Security</h2>
        <p>
          We implement reasonable security measures to protect your data. Any text you convert to speech is not stored 
          on our servers after processing.
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