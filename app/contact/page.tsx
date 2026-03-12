export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neutral-50 px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Contact
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight">
          Get in touch
        </h1>
        <p className="mt-6 text-lg leading-8 text-neutral-600">
          Have a question, idea, or collaboration in mind? Reach out and let’s
          build something meaningful.
        </p>

        <form className="mt-10 space-y-6 rounded-3xl border border-neutral-200 bg-white p-8">
          <div>
            <label className="mb-2 block text-sm font-medium">Name</label>
            <input
              type="text"
              className="w-full rounded-2xl border border-neutral-300 px-4 py-3 outline-none"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full rounded-2xl border border-neutral-300 px-4 py-3 outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Message</label>
            <textarea
              className="min-h-[140px] w-full rounded-2xl border border-neutral-300 px-4 py-3 outline-none"
              placeholder="Write your message"
            />
          </div>

          <button className="rounded-2xl bg-neutral-900 px-6 py-3 text-sm font-medium text-white">
            Send message
          </button>
        </form>
      </div>
    </main>
  );
}