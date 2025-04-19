import { Layout } from "../components/Layout";

export default function Contact() {
  return (
    <Layout>
      <div className="bg-neutral-950 text-gold min-h-screen flex flex-col items-center justify-center text-center p-10">
        <h2 className="text-4xl font-serif mb-4">Let’s Create Something Timeless Together</h2>
        <p className="max-w-xl text-gray-300 mb-6">
          Share your vision with us. Whether you're an architect, designer, or homeowner, we’ll bring it to life.
        </p>
        <form className="w-full max-w-md space-y-4">
          <input className="w-full p-3 rounded bg-black text-white placeholder-gray-400" placeholder="Your Name" />
          <input className="w-full p-3 rounded bg-black text-white placeholder-gray-400" placeholder="Email Address" />
          <textarea className="w-full p-3 rounded bg-black text-white placeholder-gray-400" rows={4} placeholder="Tell us about your project..."></textarea>
          <button className="w-full py-3 bg-gold text-black font-semibold rounded-xl">Send Inquiry</button>
        </form>
      </div>
    </Layout>
  );
}