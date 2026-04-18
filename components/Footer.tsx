export default function Footer() {
    return (
      <footer className="border-t border-gray-200 bg-gray-50 mt-20">
        <div className="max-w-5xl mx-auto px-6 md:px-8 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-base font-semibold text-black">
              Dr Victor Obarafor (PhD)
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Privacy-Preserving Machine Learning Researcher
            </p>
          </div>
  
          <div className="flex flex-wrap gap-5 text-sm text-gray-700">
            <a
              href="https://github.com/vicobarafor"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-700 transition"
            >
              GitHub
            </a>
  
            <a
              href="https://linkedin.com/in/victor-obarafor-phd-b73b96178/"
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
              vicobarafor@gmail.com
            </a>
          </div>
        </div>
  
        <div className="max-w-5xl mx-auto px-6 md:px-8 pb-10">
          <p className="text-sm text-gray-500">
            © 2026 Dr Victor Obarafor. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }