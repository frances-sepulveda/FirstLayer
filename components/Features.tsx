const features = [
  {
    title: "Step-by-step guidance",
    description:
      "Clear lessons that help beginners move from idea to execution.",
  },
  {
    title: "Modern business thinking",
    description:
      "Practical advice for building in today’s digital world.",
  },
  {
    title: "Built for growth",
    description:
      "Start with one business and expand into a bigger ecosystem over time.",
  },
];

export default function Features() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight">
          Why FirstLayer
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-neutral-200 p-6"
            >
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}