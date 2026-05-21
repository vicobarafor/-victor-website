export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#f5f5f3]">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xl font-semibold text-black">
              Dr Victor Obarafor
            </p>
            <p className="mt-2 max-w-xl text-gray-700">
              Machine Learning Researcher & Research Engineer building robust
              federated, adaptive, and production-grade AI systems.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-gray-700">
            <a
              href="https://github.com/vicobarafor"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-700 transition"
            >
              GitHub
            </a>

            <a
              href="https://uk.linkedin.com/in/victor-obarafor-phd-b73b96178"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-700 transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:vicobarafor@gmail.com"
              className="hover:text-indigo-700 transition"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 text-sm text-gray-500">
          © 2026 Dr Victor Obarafor. All rights reserved.
        </div>
      </div>
    </footer>
  );
}