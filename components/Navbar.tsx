import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight hover:text-gray-700 transition"
        >
          Dr Victor Obarafor
        </Link>

        <nav className="flex items-center gap-6 text-sm md:text-base text-gray-700">
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
      </div>
    </header>
  );
}