import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="about" className="py-20 bg-slate-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Designed for modern teams</h2>
            <p className="mt-4 text-lg text-slate-600">
              This template gives you a polished foundation, so you can focus on building your product. Clean styles, accessible components, and a delightful experience out of the box.
            </p>
            <div id="get-started" className="mt-8 inline-flex rounded-lg bg-slate-900 text-white px-6 py-3 font-medium hover:bg-slate-800 transition">
              Start Building
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
