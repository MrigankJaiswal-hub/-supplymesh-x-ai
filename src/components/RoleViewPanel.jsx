import { AlertTriangle, Bell, IndianRupee, PackageCheck, Truck } from "lucide-react";

const content = {
  admin: {
    title: "Admin Control Tower",
    subtitle: "Enterprise-level operational intelligence for logistics managers.",
    cards: [
      ["Total Shipments", "12,420", Truck],
      ["High Risk Routes", "37", AlertTriangle],
      ["Recovery Actions", "81", PackageCheck],
      ["Partner Alerts", "24", Bell],
    ],
    insight:
      "Admin can monitor all shipments, apply AI recovery actions, audit alerts, and track carbon-aware logistics performance.",
  },

  vendor: {
    title: "Vendor Partner View",
    subtitle: "Focused operational view for logistics partners and carriers.",
    cards: [
      ["Assigned Shipments", "128", Truck],
      ["Pending Alerts", "7", Bell],
      ["Route Changes", "14", PackageCheck],
      ["Delay Risk", "Medium", AlertTriangle],
    ],
    insight:
      "Vendors receive only relevant route changes, shipment alerts, ETA updates, and action instructions from the control tower.",
  },

  msme: {
    title: "MSME Lite Mode",
    subtitle: "Simple, low-friction supply chain dashboard for small businesses.",
    cards: [
      ["Active Orders", "42", PackageCheck],
      ["At-Risk Deliveries", "3", AlertTriangle],
      ["Cost Saved", "₹18K", IndianRupee],
      ["Alerts Received", "9", Bell],
    ],
    insight:
      "MSMEs can track shipments, understand delay reasons, receive simple AI recommendations, and reduce logistics losses without complex ERP systems.",
  },
};

export default function RoleViewPanel({ activeRole }) {
  const view = content[activeRole];

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="mb-6">
        <p className="text-cyan-300">Current Mode</p>
        <h2 className="mt-2 text-3xl font-black">{view.title}</h2>
        <p className="mt-2 text-sm text-slate-400">{view.subtitle}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {view.cards.map(([label, value, Icon]) => (
          <div key={label} className="rounded-2xl bg-slate-950/70 p-5">
            <Icon className="mb-3 text-cyan-300" />
            <p className="text-sm text-slate-400">{label}</p>
            <h3 className="mt-2 text-2xl font-bold">{value}</h3>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-5">
        <h3 className="font-bold text-cyan-300">Role Insight</h3>
        <p className="mt-2 text-sm leading-6 text-slate-300">{view.insight}</p>
      </div>
    </div>
  );
}