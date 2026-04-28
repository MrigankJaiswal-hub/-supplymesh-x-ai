import { useState } from "react";

import {
  AlertTriangle,
  BarChart3,
  Leaf,
  PackageCheck,
  Route,
  Truck,
} from "lucide-react";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import StatCard from "../components/StatCard";
import RiskTable from "../components/RiskTable";
import RouteSimulation from "../components/RouteSimulation";
import AIChatPanel from "../components/AIChatPanel";
import SustainabilityPanel from "../components/SustainabilityPanel";
import LiveAlertsPanel from "../components/LiveAlertsPanel";
import PremiumRouteMap from "../components/PremiumRouteMap";
import VoiceAIControlPanel from "../components/VoiceAIControlPanel";
import RoleSwitcher from "../components/RoleSwitcher";
import RoleViewPanel from "../components/RoleViewPanel";

import { chartData } from "../data/mockData";
import { resetDemoData } from "../firebase/seedData";
import CrisisModePanel from "../components/CrisisModePanel";
import WhyWeWin from "../components/WhyWeWin";
import CashflowIntelligencePanel from "../components/CashflowIntelligencePanel"; 

export default function Dashboard() {
  const [activeRole, setActiveRole] = useState("admin");

  return (
    <section id="dashboard" className="relative px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-cyan-300">Live Command Center</p>

          <h2 className="mt-2 text-4xl font-black md:text-5xl">
            Predict. Prevent. Recover.
          </h2>

          <p className="mt-4 max-w-2xl text-slate-400">
            A Firebase-powered prototype dashboard showing disruption intelligence,
            route optimization, sustainability impact, and AI decision support.
          </p>

          <button
            onClick={resetDemoData}
            className="mt-5 rounded-full bg-emerald-400 px-5 py-2 font-bold text-slate-950 hover:bg-emerald-300"
          >
            Reset Demo Data
          </button>
        </div>

        <div className="mb-8">
          <RoleSwitcher activeRole={activeRole} setActiveRole={setActiveRole} />
        </div>

        <div className="mb-8">
          <RoleViewPanel activeRole={activeRole} />
        </div>

        <div className="mb-8">
          <CrisisModePanel />
        </div>
        <div className="mb-8">
          <CashflowIntelligencePanel />
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={Truck}
            title="Active Shipments"
            counterEnd={12420}
            subtitle="+18% visibility improved"
          />

          <StatCard
            icon={AlertTriangle}
            title="High Risk Routes"
            counterEnd={37}
            subtitle="AI monitoring active"
          />

          <StatCard
            icon={PackageCheck}
            title="Delays Prevented"
            counterEnd={81}
            subtitle="Today"
          />

          <StatCard
            icon={Leaf}
            title="Carbon Saved"
            counterEnd={1.8}
            suffix="T"
            decimals={1}
            subtitle="Green routing enabled"
          />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl lg:col-span-2">
            <div className="mb-5 flex items-center gap-3">
              <BarChart3 className="text-cyan-300" />
              <h3 className="text-2xl font-bold">Delay Intelligence Trend</h3>
            </div>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="prevented" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
                    </linearGradient>
                  </defs>

                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="day" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />

                  <Tooltip
                    contentStyle={{
                      background: "#020617",
                      border: "1px solid #334155",
                      borderRadius: "16px",
                      color: "white",
                    }}
                  />

                  <Area
                    type="monotone"
                    dataKey="prevented"
                    stroke="#22d3ee"
                    fillOpacity={1}
                    fill="url(#prevented)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="mb-5 flex items-center gap-3">
              <Route className="text-emerald-300" />
              <h3 className="text-2xl font-bold">AI Impact</h3>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-slate-900 p-4">
                <p className="text-sm text-slate-400">Average ETA Reduction</p>
                <h4 className="mt-2 text-3xl font-bold text-cyan-300">35%</h4>
              </div>

              <div className="rounded-2xl bg-slate-900 p-4">
                <p className="text-sm text-slate-400">Cost Optimization</p>
                <h4 className="mt-2 text-3xl font-bold text-emerald-300">18%</h4>
              </div>

              <div className="rounded-2xl bg-slate-900 p-4">
                <p className="text-sm text-slate-400">Risk Accuracy</p>
                <h4 className="mt-2 text-3xl font-bold text-purple-300">92%</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <RiskTable />
        </div>

        <div className="mt-8">
          <RouteSimulation />
        </div>

        <div className="mt-8">
          <PremiumRouteMap />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <AIChatPanel />
          <VoiceAIControlPanel />
        </div>

        <div className="mt-8">
          <SustainabilityPanel />
        </div>

        <div className="mt-8">
          <LiveAlertsPanel />
        </div>
        <div className="mt-8">
          <WhyWeWin />
        </div>

      </div>
    </section>
  );
}