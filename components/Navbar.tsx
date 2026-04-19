"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="h-20 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight hover:text-gray-700 transition"
            onClick={() => setIsOpen(false)}
          >
            Dr Victor Obarafor
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-base text-gray-700">
            <Link href="/" className="hover:text-black transition">
              Home
            </Link>
            <Link href="/projects" className="hover:text-black transition">
              Projects
            </Link>
            <Link href="/about" className="hover:text-black transition">
              About
            </Link>
            <Link href="/cv" className="hover:text-black transition">
              CV
            </Link>
            <a
              href="https://github.com/vicobarafor"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/victor-obarafor-phd-b73b96178/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              LinkedIn
            </a>
          </nav>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col gap-4 text-base text-gray-700">
              <Link
                href="/"
                className="hover:text-black transition"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="hover:text-black transition"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="hover:text-black transition"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/cv"
                className="hover:text-black transition"
                onClick={() => setIsOpen(false)}
              >
                CV
              </Link>
              <a
                href="https://github.com/vicobarafor"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition"
                onClick={() => setIsOpen(false)}
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/victor-obarafor-phd-b73b96178/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition"
                onClick={() => setIsOpen(false)}
              >
                LinkedIn
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}