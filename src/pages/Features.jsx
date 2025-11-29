import React from 'react';
import FeatureCard from '../components/FeatureCard';

export default function Features() {
  return (
    <div className="min-h-screen px-6 py-12">
      <h2 className="text-3xl font-bold mb-10 text-center">All Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard title="Organize Prompts" description="Easily categorize and manage your AI prompts." />
        <FeatureCard title="Track Earnings" description="Monitor your earnings and cash out safely." />
        <FeatureCard title="Subscription Control" description="Start, pause, or cancel your subscription anytime." />
        <FeatureCard title="Secure Login" description="Safe and secure login with email and password." />
        <FeatureCard title="Mobile Friendly" description="Access PromptMP from any device." />
        <FeatureCard title="Support & Help" description="Get help quickly with our FAQ and support form." />
      </div>
    </div>
  );
}
