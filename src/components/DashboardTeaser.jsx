import { Layers, Map, Slider, Download } from 'lucide-react'

export default function DashboardTeaser() {
  return (
    <section className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-bold text-slate-900">GIS Dashboard Preview</h3>
        <p className="mt-2 text-slate-600">Layer selection, opacity control, and rich metadata — designed for clarity and speed.</p>
        <div className="mt-5 relative h-64 rounded-2xl bg-gradient-to-br from-emerald-50 via-cyan-50 to-sky-50 border border-slate-200">
          {/* Simulated map canvas */}
          <div className="absolute inset-0 p-4">
            <div className="h-full w-full rounded-xl bg-white/70 backdrop-blur border border-slate-200 grid grid-cols-6 grid-rows-6 overflow-hidden">
              <div className="col-span-2 row-span-6 border-r border-slate-200 p-3 bg-white/80">
                <div className="flex items-center gap-2 text-slate-700 font-medium">
                  <Layers className="w-4 h-4" /> Layers
                </div>
                <ul className="mt-3 space-y-2 text-sm">
                  <li className="flex items-center gap-2"><input type="checkbox" defaultChecked className="accent-slate-900" /> Drainage</li>
                  <li className="flex items-center gap-2"><input type="checkbox" className="accent-slate-900" /> Rainfall</li>
                  <li className="flex items-center gap-2"><input type="checkbox" className="accent-slate-900" /> Elevation (SRTM)</li>
                  <li className="flex items-center gap-2"><input type="checkbox" className="accent-slate-900" /> Recharge Zones</li>
                </ul>
                <div className="mt-4 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <Slider className="w-4 h-4" /> Opacity
                  </div>
                  <input type="range" className="w-full mt-1" defaultValue={70} />
                </div>
              </div>
              <div className="col-span-4 row-span-6 relative">
                <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-px">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="bg-emerald-200/30" />
                  ))}
                </div>
                <div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-lg bg-white/80 backdrop-blur px-3 py-1.5 text-sm border border-slate-200">
                  <Map className="w-4 h-4" /> Leaflet Map
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800">Open Dashboard</button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-slate-900 border border-slate-200 hover:bg-slate-50">
            <Download className="w-4 h-4" /> Export PNG
          </button>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 text-white shadow-sm">
        <h3 className="text-xl font-bold">Machine Learning Models</h3>
        <p className="mt-2 text-slate-300">Ensemble predictions with CNN + XGBoost + K-means achieving 99.67% accuracy.</p>
        <div className="mt-5 grid grid-cols-2 gap-3">
          {[
            { name: 'CNN + XGBoost + K-means', acc: '99.67%' },
            { name: 'CNN + XGBoost', acc: '98.5%' },
            { name: 'GIS WOA', acc: '—' },
            { name: 'XGBoost + K-means', acc: '95.5%' },
          ].map((m) => (
            <div key={m.name} className="rounded-xl bg-white/10 border border-white/10 p-4">
              <p className="text-sm text-slate-300">{m.name}</p>
              <p className="text-2xl font-extrabold tracking-tight">{m.acc}</p>
              <div className="mt-2 h-1.5 rounded bg-white/20">
                <div className="h-full rounded bg-emerald-400" style={{ width: m.acc === '—' ? '40%' : m.acc }} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <button className="px-4 py-2 rounded-lg bg-white text-slate-900 font-semibold hover:bg-slate-100">View Outputs</button>
        </div>
      </div>
    </section>
  )
}
