import { Layout } from "../components/Layout";

export default function Projects() {
  return (
    <Layout>
      <div className="bg-neutral-900 text-white min-h-screen p-12">
        <h2 className="text-4xl font-serif text-center mb-12">Signature Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-gray-800 p-4 rounded-xl shadow-lg">
              <div className="h-48 bg-gray-700 rounded mb-4"></div>
              <h3 className="text-xl font-semibold">Project {i}</h3>
              <p className="text-sm text-gray-400">Location, Details, Year</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}