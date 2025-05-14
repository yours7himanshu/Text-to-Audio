import React from 'react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      
      <div className="prose prose-lg">
        <p>
          Welcome to our Text to Speech service. We provide an easy-to-use platform that converts written text 
          into natural-sounding speech using simple technology.
        </p>
        
        <p>
          Our mission is to make content more accessible and free to everyone, including those with reading difficulties, 
          visual impairments, or people who prefer audio content over reading.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">Our Story</h2>
        <p>
          Founded in 2025, our team of language enthusiasts ,
          that bridges the gap between written and spoken content. We believe that everyone should have equal 
          access to information regardless of their reading abilities.
        </p>
        
        
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
        <p>
          Have questions or feedback? We&apos;d love to hear from you. Contact us at <a href="mailto:dinkarhimanshu78@gmail.com" className="text-blue-600 hover:underline">dinkarhimanshu78@gmail.com</a>.
        </p>
      </div>
    </div>
  );
} 