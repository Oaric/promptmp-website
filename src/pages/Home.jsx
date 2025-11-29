import React from 'react';
import FeatureCard from '../components/FeatureCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white text-center py-20">
        <h1 className="text-4xl font-bold mb-4">PromptMP</h1>
        <p className="text-lg mb-6">Your ultimate AI prompt management app</p>
        <div className="space-x-4">
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-100">Google Play</a>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-100">App Store</a>
        </div>
      </header>

      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard title="Manage Prompts" description="Easily organize and access all your AI prompts in one place." />
          <FeatureCard title="Subscription Control" description="Activate or deactivate your subscription directly from the website." />
          <FeatureCard title="Cash Out Earnings" description="Withdraw your earned funds safely and quickly." />
        </div>
      </section>
    </div>
  );
}
