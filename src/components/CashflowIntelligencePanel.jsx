import { Landmark, TrendingDown, ShieldCheck, Sparkles, IndianRupee } from "lucide-react";
import { motion } from "framer-motion";

export default function CashflowIntelligencePanel() {
  return (
    <section className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-2xl bg-emerald-400/10 p-3">
          <Landmark className="text-emerald-300" />
        </div>

        <div>
          <h2 className="text-3xl font-black">MSME Cashflow Intelligence</h2>
          <p className="text-sm text-slate-400">
            Predict how shipment delays affect MSME payments, working capital, and survival.
          </p>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {/* Card 1 */}
        <motion.div
          whileHover={{ y: -6 }}
          className="rounded-3xl border border-red-400/20 bg-red-500/10 p-5"
        >
          <TrendingDown className="mb-4 text-red-300" />

          <p className="text-sm text-slate-400">Predicted Delayed Payments</p>
          <h3 className="mt-2 text-4xl font-black text-red-300">₹24.8L</h3>

          <p className="mt-3 text-sm text-slate-300">
            Based on current shipment disruptions and invoice schedules.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ y: -6 }}
          className="rounded-3xl border border-yellow-400/20 bg-yellow-500/10 p-5"
        >
          <IndianRupee className="mb-4 text-yellow-300" />

          <p className="text-sm text-slate-400">Working Capital at Risk</p>
          <h3 className="mt-2 text-4xl font-black text-yellow-300">₹12.2L</h3>

          <p className="mt-3 text-sm text-slate-300">
            AI estimates liquidity pressure for MSME suppliers this week.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{ y: -6 }}
          className="rounded-3xl border border-emerald-400/20 bg-emerald-500/10 p-5"
        >
          <ShieldCheck className="mb-4 text-emerald-300" />

          <p className="text-sm text-slate-400">Cashflow Saved by AI Actions</p>
          <h3 className="mt-2 text-4xl font-black text-emerald-300">₹18.6L</h3>

          <p className="mt-3 text-sm text-slate-300">
            Reroutes, alerts, and faster ETA recovery reduced losses.
          </p>
        </motion.div>
      </div>

      {/* AI Insight Panel */}
      <div className="mt-6 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6">
        <div className="mb-3 flex items-center gap-2">
          <Sparkles className="text-cyan-300" />
          <h3 className="font-bold text-cyan-300">AI MSME Survival Insight</h3>
        </div>

        <p className="text-sm leading-7 text-slate-300">
          14 textile and manufacturing MSMEs are exposed to delayed payments due to
          Mumbai route disruption. SupplyMesh-AI™ recommends priority rerouting,
          early payment notifications, and financing readiness to prevent working
          capital stress.
        </p>
      </div>

      {/* Example Story */}
      <div className="mt-6 rounded-3xl border border-white/10 bg-slate-950/70 p-6">
        <h3 className="text-xl font-bold">Real-World Example</h3>

        <p className="mt-3 text-sm leading-7 text-slate-400">
          A Surat textile MSME shipping to Mumbai faces a 5-day delay due to a
          cyclone. Without intervention, payment of ₹3.2 lakh is delayed.
          SupplyMesh-AI™ reroutes the shipment, cuts delay to 1 day, and protects
          business cashflow.
        </p>
      </div>
    </section>
  );
}