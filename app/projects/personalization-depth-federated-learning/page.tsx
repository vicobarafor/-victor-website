import Link from "next/link";

export default function PersonalizationDepthProjectPage() {
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
          <p className="text-sm uppercase tracking-[0.16em] text-indigo-700 mb-3 font-medium">
            Research Project
          </p>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-5">
            Client-Specific Personalization Depth in Federated Learning
          </h1>

          <p className="text-lg md:text-xl text-gray-700 leading-8">
            A personalized federated learning study asking how much of a shared
            model each client should adapt after federated training, and whether
            personalization depth should be treated as a client-specific decision
            rather than a fixed global policy.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mb-14">
          <a
            href="https://github.com/vicobarafor/federated-personalization-depth"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-black text-white px-5 py-3 text-sm font-medium hover:bg-gray-800 transition"
          >
            View GitHub Repository
          </a>

          <Link
            href="/projects"
            className="inline-flex items-center rounded-full border border-gray-300 px-5 py-3 text-sm font-medium hover:border-indigo-700 hover:text-indigo-700 transition"
          >
            All Projects
          </Link>
        </div>

        <div className="grid gap-6 mb-16 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
            <p className="text-sm text-gray-500 mb-2">Research Theme</p>
            <h2 className="text-lg font-semibold mb-3">
              Personalized Federated Learning
            </h2>
            <p className="text-gray-700 leading-7">
              Studies how clients should adapt a shared federated model under
              heterogeneous local data distributions.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
            <p className="text-sm text-gray-500 mb-2">Core Question</p>
            <h2 className="text-lg font-semibold mb-3">
              How Much Should Each Client Personalize?
            </h2>
            <p className="text-gray-700 leading-7">
              Treats adaptation depth as a client-specific decision rather than
              assuming one fixed personalization policy works for everyone.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
            <p className="text-sm text-gray-500 mb-2">Evaluation Focus</p>
            <h2 className="text-lg font-semibold mb-3">
              Oracle Routing Headroom
            </h2>
            <p className="text-gray-700 leading-7">
              Quantifies unrealized performance from fixed policies by comparing
              client-wise oracle routing against standard adaptation choices.
            </p>
          </div>
        </div>

        <div className="space-y-14">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-700 leading-8">
              This project studies personalization depth in federated learning:
              after a shared model has been trained, how much of the model should
              each client adapt locally? Instead of assuming that every client
              should use the same post-hoc adaptation policy, the work treats
              personalization depth as a client-dependent decision problem.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Problem Motivation</h2>
            <p className="text-gray-700 leading-8 mb-4">
              Personalized federated learning is motivated by the fact that
              clients often have different local distributions. Yet many
              personalization workflows still apply the same adaptation strategy
              to all clients, such as fine-tuning only the head, partially
              adapting the network, or fully fine-tuning the local model.
            </p>
            <p className="text-gray-700 leading-8">
              This project asks whether that assumption is too restrictive:
              within the same federated run, different clients may benefit from
              different levels of personalization depth.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Technical Idea</h2>
            <p className="text-gray-700 leading-8 mb-4">
              The study compares multiple post-hoc personalization policies,
              including head-only fine-tuning, partial fine-tuning, and full
              fine-tuning. It evaluates these choices across five benchmark
              datasets and multiple Dirichlet non-IID regimes to understand how
              personalization depth interacts with client heterogeneity.
            </p>
            <p className="text-gray-700 leading-8">
              The analysis then measures oracle client-wise routing headroom:
              how much performance is left on the table when all clients are
              forced to use the strongest fixed personalization policy instead
              of selecting the best depth per client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              What This Project Shows
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8">
              <li>
                Personalization depth is not globally optimal; different clients
                can prefer different adaptation depths.
              </li>
              <li>
                Fixed personalization policies can leave measurable performance
                unrealized under heterogeneous federated settings.
              </li>
              <li>
                Oracle routing provides a useful upper bound for understanding
                the value of client-specific adaptation decisions.
              </li>
              <li>
                Lightweight automatic selectors are nontrivial: recovering
                oracle-level gains requires more than a simple heuristic.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Experimental Scope</h2>
            <p className="text-gray-700 leading-8">
              The repository includes implementation code, configurations,
              stored results, figures, and analysis artifacts. Experiments cover
              CIFAR-10, CIFAR-100, SVHN, FashionMNIST, and EMNIST-Balanced under
              multiple Dirichlet non-IID client partitions and random seeds.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Why It Matters</h2>
            <p className="text-gray-700 leading-8 mb-4">
              This project reframes personalization in federated learning as a
              finer-grained client-level decision problem. Instead of asking only
              whether personalization helps, it asks which type of
              personalization helps each client.
            </p>
            <p className="text-gray-700 leading-8">
              That perspective is important for real federated systems, where
              clients differ not only in their data distributions but also in how
              much local adaptation they need after global training.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Research Value</h2>
            <p className="text-gray-700 leading-8">
              This work strengthens my broader research direction around
              federated learning under heterogeneity. It shows an ability to
              identify a precise research gap, formulate a measurable decision
              problem, design systematic experiments, and package the work in a
              reproducible research repository.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}