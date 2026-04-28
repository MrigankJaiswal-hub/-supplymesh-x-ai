import Navbar from "../components/Navbar";
import Dashboard from "./Dashboard";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, Network, Truck } from "lucide-react";
import AILoader from "../components/AILoader";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <AILoader />
      <Navbar />

      <section className="relative flex min-h-screen items-center px-5 pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#06b6d433,transparent_40%)]" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-10 left-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              Google Solution Challenge 2026 Prototype
            </div>

            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              Autonomous <span className="text-cyan-300">Self-Healing</span>{" "}
              Supply Chains
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              SupplyMesh-X AI predicts logistics disruptions before they happen,
              simulates recovery plans, and recommends optimized routes for faster,
              greener, and more resilient supply chains.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#dashboard"
                className="flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950 hover:bg-cyan-300"
              >
                Launch Dashboard <ArrowRight size={18} />
              </a>

              <button className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white hover:bg-white/10">
                Watch Demo
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl"
          >
            <div className="grid gap-4">
              <div className="rounded-3xl bg-slate-900 p-5">
                <Network className="mb-4 text-cyan-300" />
                <h3 className="text-xl font-bold">AI Digital Twin</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Live virtual model of warehouses, trucks, routes, and risk zones.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl bg-slate-900 p-5">
                  <BrainCircuit className="mb-4 text-purple-300" />
                  <h3 className="font-bold">Multi-Agent AI</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Risk, route, finance, and carbon agents.
                  </p>
                </div>

                <div className="rounded-3xl bg-slate-900 p-5">
                  <Truck className="mb-4 text-emerald-300" />
                  <h3 className="font-bold">Smart Rerouting</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Self-healing route recommendations.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Dashboard />
      <Footer />
    </main>
  );
}