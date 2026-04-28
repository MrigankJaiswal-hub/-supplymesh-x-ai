import { AlertTriangle, Zap, Radio, ShieldCheck } from "lucide-react";
import { triggerMumbaiCrisisMode, resetDemoData } from "../firebase/seedData";

export default function CrisisModePanel() {
  return (
    <div className="rounded-3xl border border-red-400/20 bg-red-500/10 p-6 backdrop-blur-xl">
      <div className="mb-5 flex items-center gap-3">
        <div className="rounded-2xl bg-red-500/20 p-3">
          <AlertTriangle className="text-red-300" />
        </div>

        <div>
          <h2 className="text-2xl font-bold">Autonomous AI Crisis Mode</h2>
          <p className="text-sm text-slate-400">
            One-click emergency simulation for major supply chain disruption.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-slate-950/70 p-4">
          <Radio className="mb-3 text-red-300" />
          <p className="text-sm text-slate-400">Crisis Scenario</p>
          <h3 className="mt-1 font-bold">Mumbai Port Disruption</h3>
        </div>

        <div className="rounded-2xl bg-slate-950/70 p-4">
          <Zap className="mb-3 text-yellow-300" />
          <p className="text-sm text-slate-400">AI Action</p>
          <h3 className="mt-1 font-bold">Auto-risk escalation</h3>
        </div>

        <div className="rounded-2xl bg-slate-950/70 p-4">
          <ShieldCheck className="mb-3 text-emerald-300" />
          <p className="text-sm text-slate-400">Recovery</p>
          <h3 className="mt-1 font-bold">Relief corridor routing</h3>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          onClick={triggerMumbaiCrisisMode}
          className="rounded-full bg-red-400 px-6 py-3 font-bold text-slate-950 hover:bg-red-300"
        >
          Trigger Mumbai Crisis
        </button>

        <button
          onClick={resetDemoData}
          className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white hover:bg-white/10"
        >
          Reset Normal Operations
        </button>
      </div>

      <p className="mt-4 text-sm text-slate-400">
        Demo story: crisis detected → risk escalated → AI route recommended →
        alert broadcast logged in Firestore.
      </p>
    </div>
  );
}