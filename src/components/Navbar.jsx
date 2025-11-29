import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">PromptMP</div>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/features" className="hover:text-gray-300">Features</Link>
        <Link to="/help" className="hover:text-gray-300">Help</Link>
        <Link to="/account" className="hover:text-gray-300">Account</Link>
        <Link to="/shop" className="hover:text-gray-300">Shop</Link>
      </div>
    </nav>
  );
}
