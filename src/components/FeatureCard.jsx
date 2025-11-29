import React from 'react';

export default function FeatureCard({ title, description }) {
  return (
    <div className="bg-white shadow-lg rounded p-6 text-center">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
