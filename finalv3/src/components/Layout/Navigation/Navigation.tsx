import Link from "next/link";

export default function Navigation() {
  return (
    <header className="border-b border-black sticky top-0 bg-white z-10">
      <nav className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link
          href="/"
          hrefLang="pl_Pl"
          className="text-2xl font-serif font-bold"
        >
          LifeeStylee
        </Link>
        <menu className="hidden md:flex items-center space-x-6">sad</menu>
      </nav>
    </header>
  );
}
