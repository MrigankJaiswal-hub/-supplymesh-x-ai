import { MapPin, Route, Zap } from "lucide-react";

export default function RouteSimulation() {
  return (
    <div id="simulation" className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h2 className="mb-2 text-2xl font-bold">Smart Route Simulation</h2>
        <p className="mb-6 text-sm text-slate-400">
          AI compares original and self-healing optimized route.
        </p>

        <div className="relative h-80 overflow-hidden rounded-3xl bg-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#06b6d433,transparent_60%)]" />

          <div className="absolute left-10 top-16 flex items-center gap-2 text-red-300">
            <MapPin /> Delhi
          </div>

          <div className="absolute bottom-16 right-10 flex items-center gap-2 text-emerald-300">
            <MapPin /> Mumbai
          </div>

          <div className="absolute left-24 top-32 h-1 w-64 rotate-12 rounded-full bg-red-500 shadow-lg shadow-red-500/40" />
          <div className="absolute left-24 top-44 h-1 w-72 -rotate-6 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/40" />

          <div className="absolute bottom-5 left-5 rounded-2xl bg-black/40 p-4 text-sm backdrop-blur">
            <p className="text-red-300">Original Route: 18 hrs</p>
            <p className="text-emerald-300">AI Route: 11 hrs</p>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h2 className="mb-6 text-2xl font-bold">Recovery Decision</h2>

        <div className="space-y-5">
          <div className="rounded-2xl bg-slate-900/80 p-5">
            <Route className="mb-3 text-cyan-300" />
            <h3 className="font-bold">Recommended Reroute</h3>
            <p className="mt-2 text-sm text-slate-400">
              Shift route through Jaipur–Vadodara corridor to avoid rainfall congestion.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900/80 p-5">
            <Zap className="mb-3 text-emerald-300" />
            <h3 className="font-bold">Impact</h3>
            <p className="mt-2 text-sm text-slate-400">
              ETA reduced by 7 hours, fuel usage reduced by 11%, delay risk reduced from 91% to 24%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}