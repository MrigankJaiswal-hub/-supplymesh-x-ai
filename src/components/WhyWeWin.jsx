import {
  Zap,
  Mic,
  ShieldCheck,
  Leaf,
  FileDown,
  Building2,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const points = [
  {
    icon: Zap,
    title: "Autonomous Crisis Mode",
    desc: "One-click AI emergency response that escalates risk, reroutes shipments, and broadcasts alerts in real time.",
    color: "text-red-300",
  },
  {
    icon: Mic,
    title: "Voice AI Command Center",
    desc: "Natural language logistics control for executives and operations teams.",
    color: "text-cyan-300",
  },
  {
    icon: ShieldCheck,
    title: "Real-Time Firebase Backbone",
    desc: "Live dashboards, instant alerts, synchronized shipment intelligence, and scalable cloud architecture.",
    color: "text-emerald-300",
  },
  {
    icon: Leaf,
    title: "Carbon-Aware Routing",
    desc: "Optimized logistics decisions balancing speed, cost, and sustainability impact.",
    color: "text-green-300",
  },
  {
    icon: Building2,
    title: "MSME Inclusive Design",
    desc: "Simple dashboard mode built for Indian MSMEs without complex ERP systems.",
    color: "text-yellow-300",
  },
  {
    icon: FileDown,
    title: "Enterprise Workflow Ready",
    desc: "Recovery reports, partner alerts, AI recommendations, and audit-ready decisions.",
    color: "text-purple-300",
  },
];

export default function WhyWeWin() {
  return (
    <section className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="mb-8 text-center">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
          <Sparkles size={16} />
          Why SupplyMesh-AI™ 
        </div>

        <h2 className="text-4xl font-black md:text-5xl">
          Built for Real Impact, Not Just Demo Screens
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-slate-400">
          SupplyMesh-AI™ combines autonomous AI operations, MSME inclusion,
          sustainability intelligence, and enterprise-grade execution into one
          scalable logistics platform.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {points.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-3xl border border-white/10 bg-slate-950/70 p-6"
            >
              <Icon className={`mb-4 h-7 w-7 ${item.color}`} />

              <h3 className="text-xl font-bold">{item.title}</h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-8 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6 text-center">
        <h3 className="text-2xl font-black text-cyan-300">
          From Prediction to Recovery in Seconds
        </h3>

        <p className="mt-3 text-sm text-slate-300">
          Predict disruptions → Trigger crisis mode → Apply AI routes → Alert
          partners → Export reports → Save cost & carbon.
        </p>
      </div>
    </section>
  );
}