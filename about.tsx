import { Layout } from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="bg-white text-black min-h-screen p-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif mb-4">About Alder & Flint</h2>
            <p className="mb-6">
              We don’t build cabinets. We craft heirlooms. Alder & Flint blends tradition, artistry, and innovation to deliver cabinetry worthy of legacy.
            </p>
            <button className="px-6 py-2 bg-black text-white rounded-lg">Our Philosophy</button>
          </div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    </Layout>
  );
}