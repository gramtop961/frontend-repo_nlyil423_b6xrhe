import Navbar from './components/Navbar'
import HeroSpline from './components/HeroSpline'
import StatsGrid from './components/StatsGrid'
import DashboardTeaser from './components/DashboardTeaser'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/40 to-cyan-50 text-slate-900">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        <HeroSpline />
        <StatsGrid />
        <DashboardTeaser />

        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
          <p>
            This is a visual starting point for the Shivamogga Groundwater Recharge dashboard. It features a 3D hero, key district stats, and a preview of the GIS interface and ML section. Next steps: connect the map to live layers and wire up backend APIs.
          </p>
        </section>
      </main>

      <footer className="mt-10 border-t border-slate-200/70 bg-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Shivamogga Groundwater Recharge</p>
          <p>Built with React, Tailwind, and Spline</p>
        </div>
      </footer>
    </div>
  )
}

export default App
