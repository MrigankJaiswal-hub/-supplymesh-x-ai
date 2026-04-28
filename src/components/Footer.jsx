import {
  ShieldCheck,
  Mail,
  ArrowUpRight,
  Building2,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  const handleRequestDemo = () => {
    window.location.href =
      "mailto:supplymesh.ai@gmail.com?subject=Request Demo - SupplyMesh-AI&body=Hello SupplyMesh-AI Team,%0D%0A%0D%0AI would like to request a demo of SupplyMesh-AI.%0D%0A%0D%0AName:%0D%0AOrganization:%0D%0AUse Case:%0D%0A%0D%0ARegards,";
  };

  return (
    <footer className="relative mt-20 border-t border-white/10 bg-slate-950">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-10 lg:grid-cols-3">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-2xl bg-cyan-400/10 p-3">
                <ShieldCheck className="text-cyan-300" />
              </div>

              <div>
                <h3 className="text-2xl font-black">
                  SupplyMesh-AI<span className="align-super text-sm">™</span>
                </h3>

                <p className="text-sm text-slate-400">
                  Autonomous Supply Intelligence
                </p>
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-400">
              AI-powered resilient logistics platform for enterprises, vendors,
              and MSMEs.
            </p>
          </motion.div>

          <div>
            <h4 className="mb-5 text-lg font-bold">Modules</h4>

            <div className="space-y-3 text-sm text-slate-400">
              <p>AI Risk Monitor</p>
              <p>Recovery Engine</p>
              <p>Voice AI Control</p>
              <p>Live Alerts</p>
              <p>MSME Lite</p>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-bold">Connect</h4>

            <div className="space-y-4">
              <Row icon={Mail} text="supplymesh.ai@gmail.com" />
              <Row icon={Building2} text="LinkedIn / SupplyMesh-AI" />

              <a
                href="http://www.supplymeshai.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 text-sm text-slate-300 transition hover:bg-white/10 hover:text-cyan-300"
              >
                <Globe size={18} className="text-cyan-300" />
                <span>Website / www.supplymeshai.com</span>
              </a>
            </div>

            <button
              onClick={handleRequestDemo}
              className="mt-6 flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950 hover:bg-cyan-300"
            >
              Request Demo <ArrowUpRight size={18} />
            </button>
          </div>
        </div>

        <div className="my-8 h-px bg-white/10" />

        <div className="flex flex-col gap-3 text-sm text-slate-400 md:flex-row md:justify-between">
          <p>
            © {year} Powered by{" "}
            <span className="font-semibold text-cyan-300">
              SupplyMesh-AI™
            </span>
          </p>

          <div className="flex gap-5">
            <span>Predict</span>
            <span>Prevent</span>
            <span>Recover</span>
            <span>Optimize</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Row({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 text-sm text-slate-300">
      <Icon size={18} className="text-cyan-300" />
      <span>{text}</span>
    </div>
  );
}