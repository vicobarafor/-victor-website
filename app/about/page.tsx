export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="max-w-4xl mx-auto px-6 md:px-8 pt-20 pb-24">
        <p className="text-sm uppercase tracking-[0.16em] text-gray-500 mb-3">
          About
        </p>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
          About Me
        </h1>

        <div className="space-y-6 text-base md:text-lg text-gray-700 leading-8">
          <p>
            I am a Privacy-Preserving Machine Learning Researcher with a PhD
            focused on federated learning for smart systems. My work sits at the
            intersection of machine learning, privacy-aware distributed systems,
            and rigorous experimental design.
          </p>

          <p>
            I am particularly interested in building research that combines
            theoretical relevance, practical deployment value, and clean
            engineering execution. Alongside research contributions, I care
            deeply about reproducibility, strong infrastructure, and technical
            clarity.
          </p>

          <p>
            My broader interests include federated learning, trustworthy AI,
            robust ML experimentation, and research-grade implementation for
            real-world intelligent systems.
          </p>
        </div>
      </section>
    </main>
  );
}