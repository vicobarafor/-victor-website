export default function CVPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="max-w-4xl mx-auto px-6 md:px-8 pt-20 pb-16">
        <p className="text-sm uppercase tracking-[0.16em] text-gray-500 mb-3">
          CV
        </p>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Curriculum Vitae
        </h1>

        <p className="text-base md:text-lg text-gray-700 leading-8 mb-8">
          You can view or download my CV below.
        </p>

        <div className="flex flex-wrap gap-4 mb-10">
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-black text-white px-5 py-3 text-sm font-medium hover:bg-gray-800 transition"
          >
            Open CV
          </a>

          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center rounded-full border border-gray-300 px-5 py-3 text-sm font-medium hover:border-black hover:text-black transition"
          >
            Download CV
          </a>
        </div>

        <div className="rounded-2xl border border-gray-200 overflow-hidden">
          <iframe
            src="/cv.pdf"
            className="w-full h-[900px]"
            title="Dr Victor Obarafor CV"
          />
        </div>
      </section>
    </main>
  );
}