import { Layout } from "../components/Layout";

export default function Testimonials() {
  const testimonials = [
    { name: "Emma J.", quote: "Alder & Flint transformed our home." },
    { name: "Architect Smith", quote: "Truly museum-quality cabinetry." }
  ];

  return (
    <Layout>
      <div className="bg-black text-white min-h-screen p-12">
        <h2 className="text-4xl font-serif text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-neutral-800 p-6 rounded-xl shadow-lg">
              <p className="italic mb-4">“{t.quote}”</p>
              <p className="font-bold">– {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}