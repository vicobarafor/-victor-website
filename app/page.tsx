import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 md:px-8 pt-24 pb-20">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.22em] text-indigo-700 mb-5 font-medium">
            Privacy-Preserving Machine Learning
          </p>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
            Dr Victor Obarafor (PhD)
          </h1>

          <p className="text-xl md:text-2xl text-gray-800 font-medium mb-7 leading-relaxed">
            Privacy-Preserving Machine Learning Researcher focused on federated
            learning, robust optimization, and research-grade machine learning
            systems.
          </p>

          <p className="text-base md:text-lg text-gray-700 leading-8 mb-10">
            I work on privacy-preserving machine learning, federated learning,
            and reproducible ML systems. My research focuses on understanding
            instability under data heterogeneity, designing principled
            aggregation strategies, and building publication-standard
            experimental pipelines for reliable machine learning research.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-full bg-black text-white px-6 py-3.5 text-sm font-medium shadow-sm hover:bg-gray-800 hover:shadow-md transition"
            >
              View Projects
            </Link>

            <Link
              href="/cv"
              className="inline-flex items-center rounded-full border border-gray-300 bg-white px-6 py-3.5 text-sm font-medium text-gray-900 hover:border-indigo-700 hover:text-indigo-700 hover:shadow-sm transition"
            >
              View CV
            </Link>
          </div>
        </div>
      </section>

      {/* Focus Cards */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-6 md:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <p className="text-sm text-indigo-700 font-medium mb-2">
                Research Focus
              </p>
              <h2 className="text-xl font-semibold mb-3">
                Federated & Privacy-Preserving ML
              </h2>
              <p className="text-gray-700 leading-7">
                Research spanning federated learning, decentralized optimization,
                privacy-aware training, and robust learning under client data
                heterogeneity.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <p className="text-sm text-indigo-700 font-medium mb-2">
                Method Design
              </p>
              <h2 className="text-xl font-semibold mb-3">
                Aggregation & Optimization
              </h2>
              <p className="text-gray-700 leading-7">
                Designing adaptive aggregation mechanisms that use update
                structure, drift, and geometry signals to improve robustness in
                challenging federated settings.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <p className="text-sm text-indigo-700 font-medium mb-2">
                Engineering Strength
              </p>
              <h2 className="text-xl font-semibold mb-3">
                Reproducible Research Systems
              </h2>
              <p className="text-gray-700 leading-7">
                Building clean, modular, and publication-grade machine learning
                infrastructure for rigorous experimentation, benchmarking, and
                technical delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="max-w-5xl mx-auto px-6 md:px-8 py-20">
        <div className="flex items-end justify-between mb-10 gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-indigo-700 mb-3 font-medium">
              Selected Work
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Research & Projects
            </h2>
          </div>

          <Link
            href="/projects"
            className="text-sm md:text-base underline underline-offset-4 hover:text-indigo-700 transition"
          >
            See all projects
          </Link>
        </div>

        <div className="grid gap-6">
          <article className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-lg transition duration-200">
            <h3 className="text-xl font-semibold mb-3">
              <Link
                href="/projects/federated-learning-smart-systems"
                className="hover:text-indigo-700 transition"
              >
                Geometry-Aware Federated LoRA under Heterogeneity
              </Link>
            </h3>
            <p className="text-gray-700 leading-8">
              Developed a research-grade federated fine-tuning framework for
              LoRA-based language models, showing that early-round client update
              geometry strongly predicts convergence quality under heterogeneous
              data. Proposed a geometry-aware aggregation method, FedGeoX, to
              study and improve robustness in decentralized adaptation.
            </p>
          </article>

          <article className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-lg transition duration-200">
            <h3 className="text-xl font-semibold mb-3">
              <Link
                href="/projects/reproducible-ml-infrastructure"
                className="hover:text-indigo-700 transition"
              >
                Drift-Aware Adaptive Aggregation for Federated Learning
              </Link>
            </h3>
            <p className="text-gray-700 leading-8">
              Designed a lightweight server-side aggregation strategy that
              adaptively reweights client updates according to their drift from
              the consensus direction. The method exposes instability under
              non-IID client distributions and provides an interpretable
              mechanism for more robust federated aggregation.
            </p>
          </article>

          <article className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-lg transition duration-200">
            <h3 className="text-xl font-semibold mb-3">
              <Link
                href="/projects/publication-standard-ml-systems"
                className="hover:text-indigo-700 transition"
              >
                Reproducible ML Research Infrastructure
              </Link>
            </h3>
            <p className="text-gray-700 leading-8">
              Built publication-standard machine learning workflows with modular
              experimentation, clear benchmarking structure, and clean technical
              organization to support rigorous iteration, reproducibility, and
              high-quality research delivery.
            </p>
          </article>
        </div>
      </section>

      {/* Closing Section */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 md:px-8 py-16">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-indigo-700 mb-3 font-medium">
              Research Direction
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-5">
              Building reliable machine learning under heterogeneity and privacy constraints
            </h2>
            <p className="text-gray-700 leading-8 text-base md:text-lg">
              My work sits at the intersection of federated learning,
              privacy-preserving machine learning, robust optimization, and
              reproducible research engineering. I’m particularly interested in
              designing methods and systems that remain stable, interpretable,
              and technically rigorous in real-world decentralized settings.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}