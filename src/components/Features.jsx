import { Shield, Zap, Settings, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure by default',
    desc: 'Best practices baked in with sensible defaults so you can ship with confidence.'
  },
  {
    icon: Zap,
    title: 'Blazing fast',
    desc: 'Optimized for performance and responsiveness on every device.'
  },
  {
    icon: Settings,
    title: 'Easy to customize',
    desc: 'Composable components and utility classes make tweaking effortless.'
  },
  {
    icon: Users,
    title: 'User focused',
    desc: 'Thoughtful UX patterns that help users get things done.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Everything you need</h2>
          <p className="mt-4 text-lg text-slate-600">A curated set of utilities and components to jumpstart your next project.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
