const guides = [
  "How to choose your first business idea",
  "How to validate demand before spending money",
  "How to build a brand people remember",
];

export default function GuidesPreview() {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight">
          Start with practical guides
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {guides.map((guide) => (
            <div
              key={guide}
              className="rounded-3xl border border-neutral-200 bg-white p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                Guide
              </p>
              <h3 className="mt-4 text-xl font-semibold leading-8">{guide}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                Beginner-friendly content designed to turn confusion into action.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}