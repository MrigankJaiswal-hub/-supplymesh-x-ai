import { Leaf, TrendingUp } from "lucide-react";

export default function SustainabilityPanel() {
  return (
    <div id="sustainability" className="rounded-3xl border border-white/10 bg-emerald-400/10 p-6 backdrop-blur-xl">
      <div className="mb-5 flex items-center gap-3">
        <Leaf className="text-emerald-300" />
        <h2 className="text-2xl font-bold">Carbon-Aware Logistics Engine</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-slate-950/60 p-5">
          <p className="text-sm text-slate-400">CO₂ Saved</p>
          <h3 className="mt-2 text-3xl font-bold text-emerald-300">1.8T</h3>
        </div>

        <div className="rounded-2xl bg-slate-950/60 p-5">
          <p className="text-sm text-slate-400">Green Routes</p>
          <h3 className="mt-2 text-3xl font-bold text-emerald-300">64%</h3>
        </div>

        <div className="rounded-2xl bg-slate-950/60 p-5">
          <p className="text-sm text-slate-400">ESG Score</p>
          <h3 className="mt-2 text-3xl font-bold text-emerald-300">A+</h3>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2 text-sm text-emerald-200">
        <TrendingUp size={18} />
        AI recommends routes balancing speed, cost, and carbon impact.
      </div>
    </div>
  );
}