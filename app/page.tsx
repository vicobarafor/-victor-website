import Image from "next/image";
import Link from "next/link";

const expertise = [
  "Federated Learning",
  "Privacy-Preserving ML",
  "Robust Optimization",
  "Research Systems",
];

const projects = [
  {
    eyebrow: "Research Focus",
    title: "Federated & Privacy-Preserving ML",
    description:
      "Research spanning federated learning, decentralized optimization, privacy-aware training, and robust learning under client data heterogeneity.",
  },
  {
    eyebrow: "Method Design",
    title: "Aggregation & Optimization",
    description:
      "Designing adaptive aggregation mechanisms that use update structure, drift, and geometry signals to improve robustness in challenging federated settings.",
  },
  {
    eyebrow: "Engineering Strength",
    title: "Reproducible Research Systems",
    description:
      "Building clean, modular, and publication-grade machine learning infrastructure for rigorous experimentation, benchmarking, and technical delivery.",
  },
];

const selectedProjects = [
  {
    title: "Federated Learning Smart Systems",
    description:
      "Investigating optimization stability, update geometry, and robust training behaviour in federated learning systems under heterogeneous client environments.",
    href: "/projects/federated-learning-smart-systems",
  },
  {
    title: "Reproducible ML Infrastructure",
    description:
      "Engineering publication-grade ML systems for scalable experimentation and research reproducibility.",
    href: "/projects/reproducible-ml-infrastructure",
  },
  {
    title: "Personalization Depth in Federated Learning",
    description:
      "Analyzing client-specific personalization depth and oracle routing headroom in heterogeneous federated environments.",
    href: "/projects/personalization-depth-federated-learning",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f3] text-black">
      {/* HERO */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-24">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-indigo-700 mb-6">
                Privacy-Preserving Machine Learning
              </p>

              <h1 className="text-6xl md:text-7xl font-semibold tracking-tight leading-[0.95] mb-10">
                Dr Victor Obarafor
                <span className="block">(PhD)</span>
              </h1>

              <p className="text-2xl md:text-3xl leading-relaxed text-gray-900 max-w-3xl mb-10">
                Building robust and privacy-preserving machine learning systems
                for decentralized environments.
              </p>

              <p className="text-lg leading-9 text-gray-700 max-w-3xl mb-12">
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
                  className="rounded-full bg-black text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition"
                >
                  View Projects
                </Link>

                <a
                  href="/cv.pdf"
                  target="_blank"
                  className="rounded-full border border-gray-300 px-6 py-3 text-sm font-medium hover:border-black transition"
                >
                  View CV
                </a>
              </div>

              <div className="flex flex-wrap gap-4">
                {expertise.map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-gray-300 bg-white px-5 py-3 text-sm shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

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

                <div className="pt-5 px-2 pb-2">
                  <p className="text-lg font-semibold text-black">
                    Dr Victor Obarafor
                  </p>

                  <p className="text-gray-600 mt-1">
                    Privacy-Preserving Machine Learning Researcher
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
          <div className="grid md:grid-cols-5 gap-6 text-lg text-gray-800">
            <div>PhD Researcher</div>
            <div>Federated Learning</div>
            <div>Privacy-Preserving ML</div>
            <div>Robust Aggregation</div>
            <div>Reproducible Research Systems</div>
          </div>
        </div>
      </section>

      {/* PROJECT CARDS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm"
              >
                <p className="text-indigo-700 text-sm mb-5">
                  {project.eyebrow}
                </p>

                <h2 className="text-4xl font-semibold leading-tight mb-6">
                  {project.title}
                </h2>

                <p className="text-gray-700 text-xl leading-9">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH STATEMENT */}
      <section className="border-y border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-24">
          <div className="max-w-5xl">
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight mb-10">
              Building reliable machine learning under heterogeneity and privacy
              constraints
            </h2>

            <p className="text-2xl leading-[1.9] text-gray-700">
              My work sits at the intersection of federated learning,
              privacy-preserving machine learning, robust optimization, and
              reproducible research engineering. I’m particularly interested in
              designing methods and systems that remain stable, interpretable,
              and technically rigorous in real-world decentralized settings.
            </p>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-14">
            <p className="text-sm uppercase tracking-[0.25em] text-indigo-700 mb-4">
              Selected Work
            </p>

            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight">
              Research Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {selectedProjects.map((project) => (
              <article
                key={project.title}
                className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm"
              >
                <h3 className="text-3xl font-semibold mb-5">
                  <Link
                    href={project.href}
                    className="hover:text-indigo-700 transition"
                  >
                    {project.title}
                  </Link>
                </h3>

                <p className="text-gray-700 text-lg leading-8 mb-8">
                  {project.description}
                </p>

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
      </section>

      {/* PUBLICATIONS */}
      <section className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-24">
          <div className="mb-14">
            <p className="text-sm uppercase tracking-[0.25em] text-indigo-700 mb-4">
              Publications & Output
            </p>

            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight">
              Research Direction
            </h2>
          </div>

          <div className="space-y-10">
            <div className="border-b border-gray-200 pb-10">
              <h3 className="text-2xl font-semibold mb-3">
                Early Dynamics and Stability in Federated Learning under Non-IID
                Data
              </h3>

              <p className="text-gray-700 text-lg leading-8">
                Investigating whether early-round training dynamics can predict
                final convergence behavior and instability in heterogeneous
                federated learning environments.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-10">
              <h3 className="text-2xl font-semibold mb-3">
                Client-Specific Personalization Depth in Federated Learning
              </h3>

              <p className="text-gray-700 text-lg leading-8">
                Studying personalization depth as a client-level decision
                problem and evaluating oracle routing headroom under
                heterogeneous federated distributions.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3">Ongoing Output</h3>

              <p className="text-gray-700 text-lg leading-8">
                Active work includes aggregation geometry, federated LoRA,
                adaptive optimization, personalization strategies, and
                publication-grade ML experimentation systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-[#f5f5f3]">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-12 flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Dr Victor Obarafor (PhD)
            </h3>

            <p className="text-gray-700">
              Privacy-Preserving Machine Learning Researcher
            </p>
          </div>

          <div className="flex flex-wrap gap-8 text-lg">
            <a
              href="https://github.com/vicobarafor"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-700 transition"
            >
              GitHub
            </a>

            <a
              href="https://uk.linkedin.com/in/victor-obarafor-phd-b73b96178"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-700 transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:vicobarafor@gmail.com"
              className="hover:text-indigo-700 transition"
            >
              vicobarafor@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}