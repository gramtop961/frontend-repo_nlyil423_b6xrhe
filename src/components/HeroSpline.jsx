import Spline from '@splinetool/react-spline'
import { Rocket, Globe } from 'lucide-react'

export default function HeroSpline() {
  return (
    <section className="relative">
      <div className="h-[70vh] w-full rounded-3xl overflow-hidden border border-slate-200 bg-white">
        <Spline
          scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6">
          <div className="backdrop-blur-sm bg-white/50 rounded-2xl shadow-lg border border-slate-200/60 p-6 md:p-8 max-w-2xl">
            <div className="flex items-center gap-2 text-emerald-600 mb-2">
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium">Interactive GIS + ML Visualization</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Shivamogga Groundwater Recharge Dashboard
            </h2>
            <p className="mt-3 text-slate-600">
              Explore recharge potential with 3D visuals, GIS layers, and machine learning insights — built for clarity, beauty, and speed.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 active:scale-[0.99] transition">
                <Rocket className="w-4 h-4" /> Explore Dashboard
              </button>
              <button className="px-4 py-2 rounded-lg bg-white text-slate-900 font-medium border border-slate-200 hover:bg-slate-50 transition">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
