import { useEffect, useState } from "react";
import { ShieldCheck, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AILoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950 text-white"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#06b6d433,transparent_55%)]" />

          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative text-center"
          >
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-cyan-400/10 shadow-2xl shadow-cyan-400/20">
              <ShieldCheck className="h-10 w-10 text-cyan-300" />
            </div>

            <h1 className="text-4xl font-black">
              SupplyMesh-AI<span className="align-super text-base">™</span>
            </h1>

            <p className="mt-3 text-sm text-slate-400">
              Initializing AI Logistics Grid...
            </p>

            <div className="mt-6 flex items-center justify-center gap-2 text-cyan-300">
              <Sparkles size={18} />
              <span className="text-sm">Predict • Prevent • Recover • Optimize</span>
            </div>

            <div className="mx-auto mt-6 h-1 w-64 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2 }}
                className="h-full rounded-full bg-cyan-400"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}