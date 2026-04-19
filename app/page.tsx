import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8 pt-20 pb-16">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-14 items-center">
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.22em] text-indigo-700 mb-5 font-medium">
                Privacy-Preserving Machine Learning
              </p>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
                Dr Victor Obarafor <span className="whitespace-nowrap">(PhD)</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-900 font-medium mb-7 leading-relaxed max-w-3xl">
                Building robust and privacy-preserving machine learning systems
                for decentralized environments.
              </p>

              <p className="text-base md:text-lg text-gray-700 leading-8 mb-10 max-w-3xl">
                I work at the intersection of federated learning,
                privacy-preserving machine learning, robust optimization, and
                reproducible research systems. My research focuses on
                understanding instability under data heterogeneity, designing
                principled aggregation strategies, and building
                publication-standard experimental pipelines for reliable machine
                learning research.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  href="/projects"
                  className="inline-flex items-center rounded-full bg-black text-white px-6 py-3.5 text-sm font-medium shadow-sm hover:bg-gray-800 hover:shadow-md transition"
                >
                  View Research
                </Link>

                <Link
                  href="/cv"
                  className="inline-flex items-center rounded-full border border-gray-300 bg-white px-6 py-3.5 text-sm font-medium text-gray-900 hover:border-indigo-700 hover:text-indigo-700 hover:shadow-sm transition"
                >
                  Download CV
                </Link>

                <a
                  href="mailto:vicobarafor@gmail.com"
                  className="inline-flex items-center rounded-full border border-gray-300 bg-white px-6 py-3.5 text-sm font-medium text-gray-900 hover:border-indigo-700 hover:text-indigo-700 hover:shadow-sm transition"
                >
                  Contact
                </a>
              </div>

              <div className="flex flex-wrap gap-3 text-sm text-gray-700">
                <span className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2">
                  Federated Learning
                </span>
                <span className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2">
                  Privacy-Preserving ML
                </span>
                <span className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2">
                  Robust Optimization
                </span>
                <span className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2">
                  Research Systems
                </span>
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="rounded-[28px] border border-gray-200 bg-gradient-to-b from-gray-50 to-white p-4 shadow-md">
                <div className="overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm">
                  <Image
                    src="/profile.jpeg"
                    alt="Professional portrait of Dr Victor Obarafor"
                    width={900}
                    height={1100}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>

                <div className="pt-5 px-2 pb-2">
                  <p className="text-lg font-semibold text-black">
                    Dr Victor Obarafor
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Privacy-Preserving Machine Learning Researcher
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Identity Strip */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-5">
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm md:text-base text-gray-700">
            <span>PhD Researcher</span>
            <span>Federated Learning</span>
            <span>Privacy-Preserving ML</span>
            <span>Robust Aggregation</span>
            <span>Reproducible Research Systems</span>
          </div>
        </div>
      </section>

      {/* Focus */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <p className="text-sm text-indigo-700 font-medium mb-2">
                Research Focus
              </p>
              <h2 className="text-xl font-semibold mb-3">
                Federated & Privacy-Preserving ML
              </h2>
              <p className="text-gray-700 leading-7">
                Research spanning federated learning, decentralized
                optimization, privacy-aware training, and robust learning under
                client data heterogeneity.
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

      {/* Current Research */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-16">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-indigo-700 mb-3 font-medium">
                Current Research
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
                Research themes I’m actively building around
              </h2>
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-gray-200 p-5 bg-white shadow-sm">
                <h3 className="font-semibold mb-2">
                  Reliable federated learning under heterogeneity
                </h3>
                <p className="text-gray-700 leading-7">
                  Studying why decentralized training fails under non-IID client
                  distributions and how update geometry, drift, and aggregation
                  behavior reveal those failure modes.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 p-5 bg-white shadow-sm">
                <h3 className="font-semibold mb-2">
                  Geometry-aware and drift-aware aggregation
                </h3>
                <p className="text-gray-700 leading-7">
                  Designing server-side aggregation rules that use interpretable
                  signals from client updates to improve stability and
                  robustness.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 p-5 bg-white shadow-sm">
                <h3 className="font-semibold mb-2">
                  Reproducible ML research systems
                </h3>
                <p className="text-gray-700 leading-7">
                  Building structured experimentation pipelines that support
                  publication-standard outputs, faster iteration, and
                  technically disciplined research execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-16">
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
                LoRA-based language models, showing that early-round client
                update geometry strongly predicts convergence quality under
                heterogeneous data and motivating geometry-aware aggregation.
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
                adaptively reweights client updates according to their drift
                from the consensus direction, providing an interpretable
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
                Built publication-standard machine learning workflows with
                modular experimentation, clear benchmarking structure, and clean
                technical organization to support rigorous iteration,
                reproducibility, and high-quality research delivery.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Publications / Output */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-16">
          <p className="text-sm uppercase tracking-[0.18em] text-indigo-700 mb-3 font-medium">
            Research Output
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
            Selected Publications & Technical Work
          </h2>

          <div className="grid gap-5">
            <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
              <h3 className="font-semibold text-lg mb-2">
                When Federated LoRA Fails: Geometry Dynamics and Instability
                under Heterogeneity
              </h3>
              <p className="text-gray-700 leading-7">
                Research study on federated LoRA showing that early-round
                geometric properties of client updates strongly predict final
                performance under heterogeneity, alongside a geometry-aware
                aggregation method.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
              <h3 className="font-semibold text-lg mb-2">
                Drift-Aware Adaptive Aggregation for Federated Learning under
                Client Data Heterogeneity
              </h3>
              <p className="text-gray-700 leading-7">
                Technical report introducing a lightweight drift-aware
                aggregation rule that uses deviation from the mean update
                direction as a signal for more robust federated aggregation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-16">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.18em] text-indigo-700 mb-3 font-medium">
              Research Direction
            </p>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-5 leading-tight">
              Building reliable machine learning under heterogeneity and privacy
              constraints
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