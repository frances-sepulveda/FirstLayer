export default function Hero() {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-6 w-fit rounded-full border border-neutral-200 bg-white px-4 py-1 text-sm text-neutral-600">
          Learn today. Lead tomorrow.
        </div>

        <h2 className="max-w-3xl text-5xl font-semibold tracking-tight md:text-7xl">
          Build your first business with clarity.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
          FirstLayer helps people start their first business from zero with
          practical guides, simple steps, and a long-term vision.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-2xl bg-neutral-900 px-6 py-3 text-sm font-medium text-white">
            Start learning
          </button>
          <button className="rounded-2xl border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-900">
            Explore guides
          </button>
        </div>
      </div>
    </section>
  );
}