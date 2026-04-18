import Link from "next/link";

export default function FederatedLoRAProjectPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="max-w-4xl mx-auto px-6 md:px-8 pt-20 pb-24">
        <Link
          href="/projects"
          className="text-sm underline underline-offset-4 hover:text-gray-600 transition"
        >
          ← Back to Projects
        </Link>

        <div className="mt-8 mb-10">
          <p className="text-sm uppercase tracking-[0.16em] text-gray-500 mb-3">
            Flagship Project
          </p>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-5">
            Geometry-Aware Federated LoRA under Heterogeneity
          </h1>

          <p className="text-lg md:text-xl text-gray-700 leading-8">
            A research-grade study of instability in federated fine-tuning for
            LoRA-based language models, showing that early-round update geometry
            strongly predicts downstream performance under heterogeneous client
            distributions.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mb-14">
          <a
            href="https://github.com/vicobarafor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-black text-white px-5 py-3 text-sm font-medium hover:bg-gray-800 transition"
          >
            View GitHub
          </a>

          <Link
            href="/projects"
            className="inline-flex items-center rounded-full border border-gray-300 px-5 py-3 text-sm font-medium hover:border-black hover:text-black transition"
          >
            All Projects
          </Link>
        </div>

        <div className="grid gap-6 mb-16 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 p-6">
            <p className="text-sm text-gray-500 mb-2">Research Theme</p>
            <h2 className="text-lg font-semibold mb-3">
              Federated Fine-Tuning
            </h2>
            <p className="text-gray-700 leading-7">
              Studies parameter-efficient adaptation of language models in
              decentralized, heterogeneous environments.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <p className="text-sm text-gray-500 mb-2">Core Insight</p>
            <h2 className="text-lg font-semibold mb-3">
              Update Geometry Predicts Failure
            </h2>
            <p className="text-gray-700 leading-7">
              Early changes in alignment and cosine structure act as strong
              signals of later instability and convergence quality.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <p className="text-sm text-gray-500 mb-2">Method Contribution</p>
            <h2 className="text-lg font-semibold mb-3">FedGeoX</h2>
            <p className="text-gray-700 leading-7">
              A geometry-aware aggregation strategy designed to reweight client
              updates using alignment, similarity, and update magnitude.
            </p>
          </div>
        </div>

        <div className="space-y-14">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-700 leading-8">
              This project investigates why federated fine-tuning with LoRA can
              become unstable under heterogeneous client data. Rather than
              treating failure as random noise or purely as a byproduct of
              non-IID data, the work studies the geometry of client updates
              directly and shows that early-round geometric signals are strongly
              associated with final performance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Problem Motivation
            </h2>
            <p className="text-gray-700 leading-8 mb-4">
              Federated learning is attractive for privacy-sensitive settings,
              and LoRA makes decentralized adaptation of large language models
              more computationally practical. But under heterogeneous data
              distributions, federated LoRA often shows instability, high
              variance across runs, and unpredictable drops in performance.
            </p>
            <p className="text-gray-700 leading-8">
              The central question in this project is whether the structure of
              client updates can explain when federated LoRA succeeds and when
              it fails.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Technical Idea</h2>
            <p className="text-gray-700 leading-8 mb-4">
              The project analyzes round-wise client update geometry using
              measures such as pairwise cosine similarity, alignment to the mean
              update, and update magnitude. The key insight is that changes in
              these early-round signals, rather than just final averaged
              statistics, reveal whether optimization is heading toward stable
              convergence or structural failure.
            </p>
            <p className="text-gray-700 leading-8">
              Based on these observations, the project introduces{" "}
              <span className="font-semibold">FedGeoX</span>, a geometry-aware
              aggregation method that reweights client updates using alignment,
              cosine consistency, and update norm within each training round.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">What This Project Shows</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8">
              <li>
                Early-round geometry is highly predictive of downstream
                performance in federated LoRA.
              </li>
              <li>
                Misaligned client updates are not merely noisy, they act as a
                structural signal of optimization failure.
              </li>
              <li>
                Geometry-aware aggregation improves robustness in some regimes,
                while also exposing the limits of simple reweighting under
                extreme heterogeneity.
              </li>
              <li>
                The geometry–performance relationship persists across tasks,
                seeds, and larger-scale settings.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Why It Matters</h2>
            <p className="text-gray-700 leading-8 mb-4">
              This project contributes to a more principled view of federated
              optimization. Instead of evaluating federated training only
              through final metrics, it shows that the evolving structure of
              client updates contains valuable predictive information about
              convergence quality.
            </p>
            <p className="text-gray-700 leading-8">
              More broadly, the work connects privacy-preserving machine
              learning, parameter-efficient adaptation, and robust optimization
              in a way that is both technically modern and practically relevant
              to large-scale decentralized ML systems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Research Value</h2>
            <p className="text-gray-700 leading-8">
              This project reflects the kind of work I care most about:
              identifying a real instability in modern machine learning,
              formulating a clear research question, designing an interpretable
              method, and backing it with rigorous empirical analysis. It sits
              at the intersection of federated learning, privacy-preserving ML,
              optimization, and research-grade systems thinking.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}