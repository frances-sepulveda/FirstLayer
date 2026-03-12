export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
        <p>© 2026 FirstLayer. All rights reserved.</p>

        <div className="flex gap-6">
          <a href="#" className="hover:text-neutral-900">
            About
          </a>
          <a href="#" className="hover:text-neutral-900">
            Guides
          </a>
          <a href="#" className="hover:text-neutral-900">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}