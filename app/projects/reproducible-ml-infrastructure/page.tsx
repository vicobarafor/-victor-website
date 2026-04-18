import Link from "next/link";

export default function DriftAwareAggregationProjectPage() {
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
            Research Project
          </p>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-5">
            Drift-Aware Adaptive Aggregation for Federated Learning
          </h1>

          <p className="text-lg md:text-xl text-gray-700 leading-8">
            A federated learning project that studies client update drift under
            heterogeneous data and introduces an adaptive aggregation rule that
            reweights client contributions according to their deviation from the
            consensus update direction.
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
              Federated Optimization
            </h2>
            <p className="text-gray-700 leading-7">
              Studies how heterogeneous client data affects stability,
              aggregation quality, and the behavior of decentralized training.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <p className="text-sm text-gray-500 mb-2">Core Insight</p>
            <h2 className="text-lg font-semibold mb-3">
              Drift Reveals Instability
            </h2>
            <p className="text-gray-700 leading-7">
              Divergence between client updates and the mean update direction
              provides a useful signal for understanding training instability
              under non-IID conditions.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <p className="text-sm text-gray-500 mb-2">Method Contribution</p>
            <h2 className="text-lg font-semibold mb-3">DAA</h2>
            <p className="text-gray-700 leading-7">
              A lightweight server-side weighting rule that adaptively reduces
              the influence of highly drifted client updates during
              aggregation.
            </p>
          </div>
        </div>

        <div className="space-y-14">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-700 leading-8">
              This project examines a central challenge in federated learning:
              how to aggregate client updates robustly when client data are
              strongly heterogeneous. Standard methods such as Federated
              Averaging treat client updates uniformly, but this can become
              unstable when local update directions diverge significantly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Problem Motivation
            </h2>
            <p className="text-gray-700 leading-8 mb-4">
              In realistic federated settings, clients often have different data
              distributions shaped by local usage patterns, context, or
              environment. Under these conditions, local updates may point in
              conflicting directions, and uniform aggregation can amplify
              instability instead of reducing it.
            </p>
            <p className="text-gray-700 leading-8">
              This project asks whether the deviation of individual client
              updates from the consensus direction can be used as a reliable
              signal for more informed server-side aggregation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Technical Idea</h2>
            <p className="text-gray-700 leading-8 mb-4">
              The project defines client update drift as the distance between a
              client’s local update and the mean update across participating
              clients. This produces an interpretable geometry-based signal of
              how far each update deviates from the consensus direction in a
              given communication round.
            </p>
            <p className="text-gray-700 leading-8">
              Building on this idea, the work introduces{" "}
              <span className="font-semibold">
                Drift-Aware Adaptive Aggregation (DAA)
              </span>
              , a lightweight aggregation rule that uses drift-sensitive weights
              to attenuate highly divergent updates while preserving the
              standard federated training pipeline.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">What This Project Shows</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8">
              <li>
                Update drift grows substantially as client heterogeneity becomes
                stronger.
              </li>
              <li>
                Drift provides an interpretable signal of instability during
                federated training.
              </li>
              <li>
                Adaptive weighting based on drift exposes useful structure in
                client updates that uniform averaging ignores.
              </li>
              <li>
                Simple geometry-aware aggregation rules can make federated
                optimization behavior easier to analyze and reason about.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Why It Matters</h2>
            <p className="text-gray-700 leading-8 mb-4">
              Robust federated learning depends on more than privacy and
              communication efficiency. It also depends on whether the server is
              able to recognize when client updates are structurally inconsistent.
            </p>
            <p className="text-gray-700 leading-8">
              This project shows that even a simple notion of drift can reveal
              meaningful information about the dynamics of decentralized
              optimization, offering a useful direction for designing more
              reliable aggregation strategies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Research Value</h2>
            <p className="text-gray-700 leading-8">
              This work reflects my interest in identifying concrete failure
              modes in federated learning and translating them into simple,
              interpretable, and technically grounded methods. It combines
              optimization thinking, systems awareness, and empirical analysis
              in a way that supports both practical relevance and research
              clarity.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}