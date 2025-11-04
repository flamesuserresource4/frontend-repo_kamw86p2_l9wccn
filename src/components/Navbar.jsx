import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2 text-slate-900 font-semibold">
            <Rocket className="h-6 w-6 text-indigo-600" />
            VibeKit
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#features" className="text-slate-600 hover:text-slate-900 transition">Features</a>
            <a href="#about" className="text-slate-600 hover:text-slate-900 transition">About</a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900 transition">Contact</a>
            <a href="#get-started" className="inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-white shadow-sm hover:bg-indigo-500 transition">Get Started</a>
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="space-y-2">
              <a href="#features" className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100">Features</a>
              <a href="#about" className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100">About</a>
              <a href="#contact" className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100">Contact</a>
              <a href="#get-started" className="block rounded-md px-3 py-2 bg-indigo-600 text-white">Get Started</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
