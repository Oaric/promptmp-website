import React from "react";

function FeatureCard({ title, description }) {
  return (
    <div className="border rounded p-4 shadow-sm">
      <h2 className="font-semibold">{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default FeatureCard;