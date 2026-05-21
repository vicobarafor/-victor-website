"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="text-lg md:text-xl font-semibold tracking-tight text-black hover:text-indigo-700 transition"
            onClick={() => setIsOpen(false)}
          >
            Dr Victor Obarafor
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-base text-gray-700">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-black transition"
              >
                {link.label}
              </Link>
            ))}

            <a
              href="https://github.com/vicobarafor"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              GitHub
            </a>

            <a
              href="https://uk.linkedin.com/in/victor-obarafor-phd-b73b96178"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:vicobarafor@gmail.com"
              className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 transition"
            >
              Contact
            </a>
          </nav>

          <button
            type="button"
            className="md:hidden rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-gray-200 py-5">
            <nav className="flex flex-col gap-5 text-base text-gray-800">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-indigo-700 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <a
                href="https://github.com/vicobarafor"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-700 transition"
                onClick={() => setIsOpen(false)}
              >
                GitHub
              </a>

              <a
                href="https://uk.linkedin.com/in/victor-obarafor-phd-b73b96178"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-700 transition"
                onClick={() => setIsOpen(false)}
              >
                LinkedIn
              </a>

              <a
                href="mailto:vicobarafor@gmail.com"
                className="rounded-full bg-black px-5 py-3 text-center text-sm font-medium text-white hover:bg-gray-800 transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}