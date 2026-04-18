import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="max-w-5xl mx-auto px-6 md:px-8 pt-24 pb-16">
        <p className="text-sm uppercase tracking-[0.18em] text-indigo-700 mb-3 font-medium">
          Projects
        </p>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Research & Projects
        </h1>

        <p className="text-base md:text-lg text-gray-700 leading-8 max-w-3xl">
          A selection of research projects spanning privacy-preserving machine
          learning, federated optimization, robust aggregation, and reproducible
          machine learning systems.
        </p>
      </section>

      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-6 md:px-8 py-16">
          <div className="grid gap-6">
            <article className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-lg transition duration-200">
              <h2 className="text-2xl font-semibold mb-3">
                <Link
                  href="/projects/federated-learning-smart-systems"
                  className="hover:text-indigo-700 transition"
                >
                  Geometry-Aware Federated LoRA under Heterogeneity
                </Link>
              </h2>

              <p className="text-gray-700 leading-8 mb-4">
                A research-grade study of federated fine-tuning for LoRA-based
                language models, showing that early-round client update geometry
                strongly predicts convergence quality under heterogeneous data
                and motivating a geometry-aware aggregation strategy.
              </p>

              <Link
                href="/projects/federated-learning-smart-systems"
                className="underline underline-offset-4 hover:text-indigo-700 transition"
              >
                View project
              </Link>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-lg transition duration-200">
              <h2 className="text-2xl font-semibold mb-3">
                <Link
                  href="/projects/reproducible-ml-infrastructure"
                  className="hover:text-indigo-700 transition"
                >
                  Drift-Aware Adaptive Aggregation for Federated Learning
                </Link>
              </h2>

              <p className="text-gray-700 leading-8 mb-4">
                A federated learning project that introduces a lightweight
                server-side aggregation rule which reweights client updates
                based on their drift from the consensus direction, exposing a
                simple and interpretable signal of instability under
                heterogeneity.
              </p>

              <Link
                href="/projects/reproducible-ml-infrastructure"
                className="underline underline-offset-4 hover:text-indigo-700 transition"
              >
                View project
              </Link>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-lg transition duration-200">
              <h2 className="text-2xl font-semibold mb-3">
                <Link
                  href="/projects/publication-standard-ml-systems"
                  className="hover:text-indigo-700 transition"
                >
                  Reproducible ML Research Infrastructure
                </Link>
              </h2>

              <p className="text-gray-700 leading-8 mb-4">
                A research-engineering project focused on building clean,
                reproducible, and publication-standard machine learning
                workflows that support reliable experimentation, clearer
                benchmarking, and stronger technical delivery.
              </p>

              <Link
                href="/projects/publication-standard-ml-systems"
                className="underline underline-offset-4 hover:text-indigo-700 transition"
              >
                View project
              </Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}