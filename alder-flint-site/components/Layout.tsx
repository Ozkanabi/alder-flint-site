import Link from "next/link";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-black text-gold p-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-serif">Alder & Flint</h1>
        <div className="space-x-4">
          <Link href="/" legacyBehavior><a className="hover:underline">Home</a></Link>
          <Link href="/about" legacyBehavior><a className="hover:underline">About</a></Link>
          <Link href="/projects" legacyBehavior><a className="hover:underline">Projects</a></Link>
          <Link href="/testimonials" legacyBehavior><a className="hover:underline">Testimonials</a></Link>
          <Link href="/contact" legacyBehavior><a className="hover:underline">Contact</a></Link>
        </div>
      </nav>
      <main className="flex-1">{children}</main>
      <footer className="bg-black text-gold text-center py-4 text-sm">Crafted in Chicago. Admired Everywhere.</footer>
    </div>
  );
}