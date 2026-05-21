const projects = [
  {
    title: "FedAdaptOps",
    type: "Production Research Infrastructure",
    description:
      "Adaptive federated personalization infrastructure for heterogeneous machine learning systems, resource-aware client routing, reproducible non-IID experimentation, policy evaluation, and serving-oriented research workflows.",
    tags: [
      "Federated Learning",
      "Personalization",
      "Research Infrastructure",
      "MLOps",
    ],
    href: "https://github.com/vicobarafor/FedAdaptOps",
  },
  {
    title: "EvalRouteOps",
    type: "Adaptive Inference Systems",
    description:
      "Distributed adaptive inference infrastructure for reinforcement-learning-driven LLM routing, online optimization, observability, and production-scale serving experimentation.",
    tags: [
      "Adaptive Inference",
      "LLM Routing",
      "Distributed Systems",
      "RL Optimization",
    ],
    href: "https://github.com/vicobarafor/EvalRouteOps",
  },
  {
    title: "Federated LoRA Geometry",
    type: "Research Project",
    description:
      "Researching geometry dynamics, update instability, and low-rank adaptation behaviour in federated learning under heterogeneous client data distributions.",
    tags: ["Federated Learning", "LoRA", "Optimization Geometry"],
    href: "https://github.com/vicobarafor/federated-lora-geometry",
  },
  {
    title: "Federated Personalization Depth",
    type: "Research Project",
    description:
      "Studying client-specific personalization depth as a decision problem in federated learning, including head-only, partial, and full adaptation strategies under non-IID regimes.",
    tags: ["Personalization", "Federated Learning", "Non-IID Learning"],
    href: "https://github.com/vicobarafor/federated-personalization-depth",
  },
  {
    title: "Robust Federated Learning Non-IID",
    type: "Research Project",
    description:
      "Exploring drift-aware adaptive aggregation and robustness mechanisms for federated learning under heterogeneous client partitions.",
    tags: ["Robust Aggregation", "Non-IID", "Distributed ML"],
    href: "https://github.com/vicobarafor/robust-federated-learning-noniid",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f3] text-black">
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-24">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-indigo-700">
            Work
          </p>

          <h1 className="max-w-5xl text-5xl md:text-7xl font-semibold tracking-tight leading-tight mb-10">
            Production-grade ML systems and research infrastructure.
          </h1>

          <p className="max-w-4xl text-xl leading-9 text-gray-700">
            Selected work across adaptive AI systems, federated learning,
            distributed ML infrastructure, robust optimization, personalization,
            and reproducible experimentation.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-8">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-3xl border border-gray-200 bg-white p-8 md:p-10 shadow-sm hover:shadow-md transition"
              >
                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                  <div>
                    <p className="mb-4 text-sm uppercase tracking-[0.2em] text-indigo-700">
                      {project.type}
                    </p>

                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                      {project.title}
                    </h2>
                  </div>

                  <div>
                    <p className="mb-7 text-lg leading-8 text-gray-700">
                      {project.description}
                    </p>

                    <div className="mb-8 flex flex-wrap gap-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 hover:text-indigo-700 transition"
                    >
                      View repository
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}