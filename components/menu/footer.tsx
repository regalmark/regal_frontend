import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white py-6 px-6 shadow-inner text-center text-sm text-gray-500">
      &copy; {new Date().getFullYear()} Regal Mark. All rights reserved.
    </footer>
  );
}