import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (

      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-yellow-500">Regal Mark</div>
        <nav className="space-x-6">
          <Link href="/" className="text-gray-700 hover:text-yellow-500">Home</Link>
          <Link href="/shop" className="text-gray-700 hover:text-yellow-500">Shop</Link>
          <Link href="/about" className="text-gray-700 hover:text-yellow-500">About</Link>
          <Link href="/contact" className="text-gray-700 hover:text-yellow-500">Contact</Link>
        </nav>
      </header>

  );
}
