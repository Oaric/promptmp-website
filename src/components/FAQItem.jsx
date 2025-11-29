import React from "react";

function FAQItem({ question, answer }) {
  return (
    <div className="mb-4">
      <h3 className="font-semibold">{question}</h3>
      <p>{answer}</p>
    </div>
  );
}

export default FAQItem;