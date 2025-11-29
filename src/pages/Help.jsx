import React from 'react';
import FAQItem from '../components/FAQItem';

export default function Help() {
  const faqs = [
    { q: "How do I reset my password?", a: "Go to your account settings and click 'Reset Password'." },
    { q: "How do I contact support?", a: "Use the form below or email support@promptmp.com." },
  ];

  return (
    <div className="min-h-screen px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Help & FAQs</h2>

      <section className="max-w-3xl mx-auto mb-12">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.q} answer={faq.a} />
        ))}
      </section>

      <section className="max-w-xl mx-auto">
        <h3 className="text-xl font-bold mb-4">Contact Support</h3>
        <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="flex flex-col gap-4">
          <input type="email" name="email" placeholder="Your email" required className="border p-3 rounded"/>
          <textarea name="message" placeholder="Describe your issue" required className="border p-3 rounded"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Submit</button>
        </form>
      </section>
    </div>
  );
}
