import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

export default function StatCard({
  icon: Icon,
  title,
  value,
  subtitle,
  counterEnd,
  prefix = "",
  suffix = "",
  decimals = 0,
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10">
        <Icon className="h-6 w-6 text-cyan-300" />
      </div>

      <p className="text-sm text-slate-400">{title}</p>

      <h3 className="mt-2 text-3xl font-bold">
        {counterEnd !== undefined ? (
          <AnimatedCounter
            end={counterEnd}
            prefix={prefix}
            suffix={suffix}
            decimals={decimals}
          />
        ) : (
          value
        )}
      </h3>

      <p className="mt-2 text-sm text-emerald-300">{subtitle}</p>
    </motion.div>
  );
}