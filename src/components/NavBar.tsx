"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 mb-3 rounded-lg border-b border-neutral-200">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-12">
        {/* Logo or site name */}
        <Link href="/" className="text-2xl font-bold text-neutral-900">
          Brett M. Hixon
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6 hidden md:flex">
          <Link href="/" className="text-neutral-700 hover:text-neutral-900 transition">
            Home
          </Link>
          <Link href="/about" className="text-neutral-700 hover:text-neutral-900 transition">
            About
          </Link>
          <Link href="/projects" className="text-neutral-700 hover:text-neutral-900 transition">
            Projects
          </Link>
          <Link href="/contact" className="text-neutral-700 hover:text-neutral-900 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}