import Link from "next/link";

export default function ReproducibleInfrastructureProjectPage() {
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
            Research Engineering
          </p>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-5">
            Reproducible ML Research Infrastructure
          </h1>

          <p className="text-lg md:text-xl text-gray-700 leading-8">
            A research-engineering project focused on building clean,
            reproducible, and publication-standard machine learning workflows
            that support reliable experimentation, faster iteration, and strong
            technical delivery.
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
            <p className="text-sm text-gray-500 mb-2">Engineering Focus</p>
            <h2 className="text-lg font-semibold mb-3">
              Reproducibility by Design
            </h2>
            <p className="text-gray-700 leading-7">
              Structured workflows built to make machine learning experiments
              easier to run, compare, audit, and extend.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <p className="text-sm text-gray-500 mb-2">Core Strength</p>
            <h2 className="text-lg font-semibold mb-3">
              Research-Grade Organization
            </h2>
            <p className="text-gray-700 leading-7">
              Clean separation of experiments, configurations, outputs, and
              evaluation pipelines for stronger research reliability.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <p className="text-sm text-gray-500 mb-2">Delivery Standard</p>
            <h2 className="text-lg font-semibold mb-3">
              Publication-Quality Workflow
            </h2>
            <p className="text-gray-700 leading-7">
              Infrastructure designed to support high-quality research outputs,
              clearer benchmarking, and technically disciplined iteration.
            </p>
          </div>
        </div>

        <div className="space-y-14">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-700 leading-8">
              This project focuses on the engineering layer that makes strong
              machine learning research possible. Rather than treating
              experimentation as an ad hoc collection of scripts, the goal was
              to build structured workflows that support repeatability, clarity,
              and robust technical execution across the research lifecycle.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Problem Motivation
            </h2>
            <p className="text-gray-700 leading-8 mb-4">
              A large amount of machine learning work suffers from weak
              reproducibility, fragmented code structure, and poor experimental
              traceability. Even promising ideas can lose value when results are
              difficult to replicate, compare, or communicate cleanly.
            </p>
            <p className="text-gray-700 leading-8">
              This project addresses that problem by emphasizing disciplined
              organization, modular experimentation, and research infrastructure
              that supports reliable iteration rather than one-off results.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Technical Idea</h2>
            <p className="text-gray-700 leading-8 mb-4">
              The core idea is simple but high-leverage: treat research
              infrastructure as part of the scientific contribution. That means
              building ML workflows where data handling, model configuration,
              experimental outputs, and evaluation logic are clearly organized
              and reusable.
            </p>
            <p className="text-gray-700 leading-8">
              The resulting structure supports cleaner benchmarking, faster
              debugging, more reliable reruns, and stronger presentation of
              results — all of which matter for serious research and technical
              delivery.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">What This Project Shows</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8">
              <li>
                Reproducibility is not a side feature; it is a core part of
                high-quality ML research.
              </li>
              <li>
                Modular workflow design improves both research speed and result
                reliability.
              </li>
              <li>
                Clear technical organization makes experimentation easier to
                scale, compare, and communicate.
              </li>
              <li>
                Strong infrastructure can raise the standard of research output
                even before changing the underlying model.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Why It Matters</h2>
            <p className="text-gray-700 leading-8 mb-4">
              In modern machine learning, strong results are only part of the
              story. Teams also care about whether work can be rerun, extended,
              trusted, and communicated clearly.
            </p>
            <p className="text-gray-700 leading-8">
              This project demonstrates the engineering discipline needed to
              support serious research environments, where reproducibility,
              clarity, and technical structure are essential rather than
              optional.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Research Engineering Value</h2>
            <p className="text-gray-700 leading-8">
              This work reflects my broader approach to machine learning:
              combining research ambition with clean engineering execution. It
              shows that I do not only think about models and methods, but also
              about the infrastructure that allows research to be conducted at a
              high standard.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}