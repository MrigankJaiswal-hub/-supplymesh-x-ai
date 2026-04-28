import { MapPin, AlertTriangle, Navigation, Truck, Clock, Leaf } from "lucide-react";
import { motion } from "framer-motion";

export default function PremiumRouteMap() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-2xl bg-cyan-400/10 p-3">
          <Navigation className="text-cyan-300" />
        </div>

        <div>
          <h2 className="text-2xl font-bold">Live Logistics Route Intelligence</h2>
          <p className="text-sm text-slate-400">
            Original route vs AI self-healing optimized route.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 lg:col-span-2">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#06b6d433,transparent_60%)]" />
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:40px_40px]" />

          {/* City Markers */}
          <div className="absolute left-[12%] top-[22%]">
            <CityMarker label="Delhi" color="text-cyan-300" />
          </div>

          <div className="absolute right-[14%] bottom-[20%]">
            <CityMarker label="Mumbai" color="text-emerald-300" />
          </div>

          <div className="absolute left-[38%] top-[48%]">
            <CityMarker label="Jaipur" color="text-yellow-300" />
          </div>

          <div className="absolute right-[34%] bottom-[34%]">
            <CityMarker label="Vadodara" color="text-purple-300" />
          </div>

          {/* Original Red Route */}
          <div className="absolute left-[18%] top-[31%] h-1 w-[58%] rotate-[28deg] rounded-full bg-red-500 shadow-lg shadow-red-500/40" />

          {/* AI Green Route Segments */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "28%" }}
            transition={{ duration: 1 }}
            className="absolute left-[18%] top-[38%] h-1 rotate-[18deg] rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/40"
          />

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "25%" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute left-[42%] top-[55%] h-1 rotate-[18deg] rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/40"
          />

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "22%" }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute left-[61%] top-[67%] h-1 rotate-[10deg] rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/40"
          />

          {/* Moving Truck */}
          <motion.div
            animate={{
              x: [0, 120, 230, 340],
              y: [0, 65, 120, 155],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute left-[18%] top-[34%] rounded-full bg-cyan-400 p-3 text-slate-950 shadow-xl shadow-cyan-400/40"
          >
            <Truck size={22} />
          </motion.div>

          {/* Disruption Zone */}
          <div className="absolute left-[54%] top-[34%] rounded-2xl border border-red-400/30 bg-red-500/20 p-4 backdrop-blur">
            <div className="flex items-center gap-2 text-red-300">
              <AlertTriangle size={18} />
              <span className="text-sm font-bold">Blocked Zone</span>
            </div>
            <p className="mt-1 text-xs text-slate-300">Rainfall + congestion</p>
          </div>

          {/* Legend */}
          <div className="absolute bottom-5 left-5 rounded-2xl bg-black/50 p-4 text-xs backdrop-blur">
            <div className="mb-2 flex items-center gap-2">
              <span className="h-1 w-8 rounded-full bg-red-500" />
              <span className="text-slate-300">Original Risk Route</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-1 w-8 rounded-full bg-emerald-400" />
              <span className="text-slate-300">AI Optimized Route</span>
            </div>
          </div>
        </div>

        {/* Intelligence Panel */}
        <div className="space-y-4">
          <InfoCard
            icon={Clock}
            title="ETA Improvement"
            value="18 hrs → 11 hrs"
            subtitle="7 hours saved"
            color="text-cyan-300"
          />

          <InfoCard
            icon={AlertTriangle}
            title="Risk Reduction"
            value="91% → 24%"
            subtitle="Self-healing route applied"
            color="text-purple-300"
          />

          <InfoCard
            icon={Leaf}
            title="Carbon Optimization"
            value="18 kg CO₂"
            subtitle="Estimated emission saving"
            color="text-emerald-300"
          />

          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-5">
            <h3 className="font-bold text-cyan-300">AI Decision</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              SupplyMesh-X AI selected Jaipur → Vadodara corridor after comparing
              delay risk, cost, weather impact, route density, and carbon score.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CityMarker({ label, color }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <MapPin className={color} />
      <span className="rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
        {label}
      </span>
    </div>
  );
}

function InfoCard({ icon: Icon, title, value, subtitle, color }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
      <Icon className={`mb-3 ${color}`} />
      <p className="text-sm text-slate-400">{title}</p>
      <h3 className="mt-2 text-2xl font-bold">{value}</h3>
      <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
    </div>
  );
}