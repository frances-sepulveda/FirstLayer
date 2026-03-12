const guides = [
  "How to choose your first business idea",
  "How to validate demand before spending money",
  "How to build a simple brand",
  "How to organize your business",
  "How to get your first customer",
];

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Guides
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight">
          Practical guides for your first business
        </h1>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {guides.map((guide) => (
            <div
              key={guide}
              className="rounded-3xl border border-neutral-200 p-6"
            >
              <h2 className="text-2xl font-semibold">{guide}</h2>
              <p className="mt-3 text-neutral-600">
                A practical guide designed to help you take action.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}