import React, { useState } from 'react';

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b py-4 cursor-pointer" onClick={() => setOpen(!open)}>
      <h4 className="font-semibold">{question}</h4>
      {open && <p className="mt-2">{answer}</p>}
    </div>
  );
}
