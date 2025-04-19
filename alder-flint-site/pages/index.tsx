import { Layout } from "../components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen bg-black text-gold flex flex-col items-center justify-center p-10">
        <h1 className="text-5xl font-serif tracking-widest">ALDER & FLINT</h1>
        <p className="mt-2 text-lg uppercase">Luxury Custom Cabinetry</p>
        <p className="mt-6 max-w-xl text-center text-gray-300">
          Timeless craftsmanship for spaces that demand elegance.
        </p>
        <Link href="/projects" legacyBehavior>
          <a className="mt-8 px-6 py-3 bg-gold text-black font-semibold rounded-2xl shadow-xl">
            View Our Work
          </a>
        </Link>
      </div>
    </Layout>
  );
}