import Link from "next/link";

const projects = [
  {
    title: "Federated Learning Smart Systems",
    description:
      "Investigating optimization stability, update geometry, and robust training behaviour in federated learning systems under heterogeneous client environments.",
    tags: ["Federated Learning", "Optimization", "Distributed ML"],
    href: "/projects/federated-learning-smart-systems",
  },
  {
    title: "Reproducible ML Infrastructure",
    description:
      "Building clean, modular, and publication-grade ML systems for rigorous experimentation, benchmarking, and scalable research workflows.",
    tags: ["Engineering", "Infrastructure", "Reproducibility"],
    href: "/projects/reproducible-ml-infrastructure",
  },
  {
    title: "Personalization Depth in Federated Learning",
    description:
      "Analyzing how personalization depth influences convergence stability, representation learning, and robustness under heterogeneous federated environments.",
    tags: [
      "Personalization",
      "Federated Learning",
      "Representation Learning",
    ],
    href: "/projects/personalization-depth-federated-learning",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f3] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-600 mb-4">
            Research Projects
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-black max-w-4xl leading-tight">
            Research systems focused on federated learning, personalization,
            robustness, and reproducible machine learning.
          </h1>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-2xl font-semibold mb-4 text-black">
                <Link
                  href={project.href}
                  className="hover:text-indigo-700 transition"
                >
                  {project.title}
                </Link>
              </h2>

              <p className="text-gray-700 leading-8 mb-6 text-lg">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 bg-gray-50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={project.href}
                className="underline underline-offset-4 hover:text-indigo-700 transition"
              >
                View project
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}