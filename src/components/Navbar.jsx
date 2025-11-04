import { Home, Layers, Map, Info } from 'lucide-react'

function NavItem({ icon: Icon, label }) {
  return (
    <a href="#" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors">
      <Icon className="w-4 h-4" />
      <span>{label}</span>
    </a>
  )
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 shadow-inner" />
          <div className="leading-tight">
            <p className="text-sm text-slate-500">Shivamogga</p>
            <h1 className="text-base font-semibold text-slate-900">Groundwater Recharge</h1>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <NavItem icon={Home} label="Home" />
          <NavItem icon={Map} label="Dashboard" />
          <NavItem icon={Layers} label="Layers" />
          <NavItem icon={Info} label="Project Info" />
        </nav>
        <div className="flex items-center gap-3">
          <button className="px-3 py-1.5 rounded-lg text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 active:scale-[0.99] transition">Explore</button>
        </div>
      </div>
    </header>
  )
}
