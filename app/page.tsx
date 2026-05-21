import Image from "next/image";
import Link from "next/link";

const focusAreas = [
  "Federated Learning",
  "Adaptive AI Systems",
  "Distributed ML",
  "Production Research Infrastructure",
];

const systems = [
  {
    eyebrow: "Production Research Infrastructure",
    title: "FedAdaptOps",
    description:
      "Adaptive federated personalization infrastructure for non-IID learning, client routing, resource-aware orchestration, and reproducible large-scale experimentation.",
  },
  {
    eyebrow: "Adaptive Inference Systems",
    title: "EvalRouteOps",
    description:
      "Distributed adaptive inference infrastructure exploring reinforcement-learning-driven routing, online optimization, observability, and scalable LLM serving systems.",
  },
  {
    eyebrow: "Research Engineering",
    title: "Publication-Grade ML Systems",
    description:
      "Building rigorous experimentation platforms, reproducible pipelines, evaluation tooling, and modular ML infrastructure for reliable AI research.",
  },
];

const featuredProjects = [
  {
    title: "FedAdaptOps",
    description:
      "Adaptive federated personalization infrastructure for heterogeneous distributed machine learning systems.",
    href: "https://github.com/vicobarafor/FedAdaptOps",
  },
  {
    title: "EvalRouteOps",
    description:
      "RL-driven adaptive inference and distributed routing infrastructure for large-scale AI serving experimentation.",
    href: "https://github.com/vicobarafor/EvalRouteOps",
  },
  {
    title: "Federated Personalization Depth",
    description:
      "Researching client-specific personalization depth and oracle routing headroom under heterogeneous federated environments.",
    href: "https://github.com/vicobarafor/federated-personalization-depth",
  },
  {
    title: "Federated LoRA Geometry",
    description:
      "Investigating instability, optimization geometry, and low-rank adaptation dynamics in federated learning systems.",
    href: "https://github.com/vicobarafor/federated-lora-geometry",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f3] text-black">
      {/* HERO */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="mb-6 text-sm uppercase tracking-[0.32em] text-indigo-700">
                Machine Learning Research & Systems Engineering
              </p>

              <h1 className="text-6xl md:text-7xl font-semibold tracking-tight leading-[0.95] mb-10">
                Dr Victor Obarafor
              </h1>

              <p className="max-w-3xl text-2xl md:text-3xl leading-relaxed text-gray-900 mb-10">
                Building adaptive, distributed, and production-grade AI systems
                for robust machine learning under real-world heterogeneity.
              </p>

              <p className="max-w-3xl text-lg leading-9 text-gray-700 mb-12">
                My work spans federated learning, adaptive inference systems,
                distributed machine learning infrastructure, robust optimization,
                and reproducible research engineering. I focus on building
                technically rigorous systems that combine research depth with
                production-level engineering principles.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  href="/projects"
                  className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 transition"
                >
                  View Work
                </Link>

                <a
                  href="https://github.com/vicobarafor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-gray-300 px-6 py-3 text-sm font-medium hover:border-black transition"
                >
                  GitHub Profile
                </a>
              </div>

              <div className="flex flex-wrap gap-4">
                {focusAreas.map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-gray-300 bg-white px-5 py-3 text-sm shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* IMAGE */}
            <div className="lg:justify-self-end">
              <div className="rounded-[2rem] border border-gray-200 bg-gray-50 p-4 shadow-sm">
                <div className="overflow-hidden rounded-[1.5rem] border border-gray-200 bg-white">
                  <Image
                    src="/profile.jpeg"
                    alt="Professional portrait of Dr Victor Obarafor"
                    width={900}
                    height={1100}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>

                <div className="px-2 pt-5 pb-2">
                  <p className="text-lg font-semibold text-black">
                    ML Researcher & Research Engineer
                  </p>

                  <p className="mt-1 text-gray-600">
                    Federated Learning • Adaptive AI Systems • Distributed ML
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRIP */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-8">
          <div className="grid gap-6 text-lg text-gray-800 md:grid-cols-5">
            <div>Federated Learning</div>
            <div>Adaptive Inference</div>
            <div>Distributed AI Systems</div>
            <div>Research Infrastructure</div>
            <div>Robust Optimization</div>
          </div>
        </div>
      </section>

      {/* SYSTEMS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-14">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-indigo-700">
              Core Systems
            </p>

            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight">
              Research & Engineering Focus
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {systems.map((system) => (
              <article
                key={system.title}
                className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm"
              >
                <p className="mb-5 text-sm text-indigo-700">
                  {system.eyebrow}
                </p>

                <h3 className="mb-6 text-4xl font-semibold leading-tight">
                  {system.title}
                </h3>

                <p className="text-xl leading-9 text-gray-700">
                  {system.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="border-y border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-24">
          <div className="max-w-5xl">
            <p className="mb-5 text-sm uppercase tracking-[0.25em] text-indigo-700">
              Research Direction
            </p>

            <h2 className="mb-10 text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
              Building reliable AI systems under heterogeneity, scale, and
              adaptive decision-making constraints
            </h2>

            <p className="text-2xl leading-[1.9] text-gray-700">
              My current research explores optimization stability, aggregation
              dynamics, personalization strategies, adaptive inference routing,
              distributed orchestration, and large-scale experimentation systems
              for modern machine learning environments. I am particularly
              interested in bridging rigorous ML research with production-grade
              systems engineering.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-14">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-indigo-700">
              Featured Work
            </p>

            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight">
              Selected Projects
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <article
                key={project.title}
                className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm"
              >
                <h3 className="mb-5 text-3xl font-semibold">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-700 transition"
                  >
                    {project.title}
                  </a>
                </h3>

                <p className="mb-8 text-lg leading-8 text-gray-700">
                  {project.description}
                </p>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-indigo-700 transition"
                >
                  View repository
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER SPACER */}
      <section className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-20">
          <h2 className="max-w-4xl text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            Researching adaptive and robust machine learning systems for
            decentralized and large-scale AI environments.
          </h2>
        </div>
      </section>
    </main>
  );
}