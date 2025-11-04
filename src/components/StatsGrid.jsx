import { BarChart3, Droplets, Trees, Users } from 'lucide-react'

const stats = [
  { label: 'Total Area', value: '8,477 km²', icon: Trees, accent: 'from-emerald-400 to-teal-500' },
  { label: 'Population', value: '1,752,753', icon: Users, accent: 'from-sky-400 to-cyan-500' },
  { label: 'Total Villages', value: '1,095', icon: BarChart3, accent: 'from-violet-400 to-fuchsia-500' },
  { label: 'Avg Rainfall Belts', value: 'High–Very High', icon: Droplets, accent: 'from-blue-400 to-indigo-500' },
]

function StatCard({ label, value, icon: Icon, accent }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full bg-gradient-to-br ${accent} opacity-20 group-hover:opacity-30 transition`} />
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-white grid place-items-center">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-slate-500">{label}</p>
              <p className="text-xl font-bold text-slate-900">{value}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function StatsGrid() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s) => (
        <StatCard key={s.label} {...s} />
      ))}
    </section>
  )
}
