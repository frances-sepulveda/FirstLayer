import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          FirstLayer
        </Link>

        <nav className="hidden gap-6 text-sm text-neutral-600 md:flex">
          <Link href="/about" className="hover:text-neutral-900">
            About
          </Link>
          <Link href="/guides" className="hover:text-neutral-900">
            Guides
          </Link>
          <Link href="/contact" className="hover:text-neutral-900">
            Contact
          </Link>
        </nav>

        <Link
          href="/guides"
          className="rounded-2xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white"
        >
          Start
        </Link>
      </div>
    </header>
  );
}