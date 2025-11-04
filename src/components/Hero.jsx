import { Rocket, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-pink-50 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 text-indigo-700 px-3 py-1 text-sm font-medium">
              <Star className="h-4 w-4" />
              New: Beautiful template built with Tailwind
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Build elegant UIs faster with VibeKit
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              A clean, modern starting point for your next app. Thoughtful components, responsive out of the box, and easy to customize.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#get-started" className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-white font-medium shadow-sm hover:bg-indigo-500 transition">
                <Rocket className="h-5 w-5" />
                Get Started
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-6 py-3 text-slate-700 font-medium hover:bg-slate-50 transition">
                Explore Features
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 p-6">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500" />
                <div className="rounded-xl bg-gradient-to-br from-fuchsia-500 to-pink-500" />
                <div className="rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500" />
                <div className="rounded-xl bg-gradient-to-br from-amber-500 to-orange-500" />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block">
              <div className="rounded-xl bg-white shadow-md ring-1 ring-slate-200 px-4 py-2 text-sm text-slate-700">
                Responsive, accessible, and fast.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
