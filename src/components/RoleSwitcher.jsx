import { Building2, Factory, ShieldCheck } from "lucide-react";

const roles = [
  {
    id: "admin",
    title: "Admin Control Tower",
    icon: ShieldCheck,
    description: "Full visibility across shipments, risks, alerts, and AI recovery actions.",
  },
  {
    id: "vendor",
    title: "Vendor Partner View",
    icon: Building2,
    description: "Focused view for assigned shipments, partner alerts, and reroute instructions.",
  },
  {
    id: "msme",
    title: "MSME Lite Mode",
    icon: Factory,
    description: "Simple dashboard for small businesses with shipment status, cost impact, and alerts.",
  },
];

export default function RoleSwitcher({ activeRole, setActiveRole }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="mb-5">
        <h2 className="text-2xl font-bold">Role-Based Supply Chain Access</h2>
        <p className="mt-1 text-sm text-slate-400">
          Switch between real-world stakeholder views.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {roles.map((role) => {
          const Icon = role.icon;
          const selected = activeRole === role.id;

          return (
            <button
              key={role.id}
              onClick={() => setActiveRole(role.id)}
              className={`rounded-3xl border p-5 text-left transition ${
                selected
                  ? "border-cyan-400 bg-cyan-400/10"
                  : "border-white/10 bg-slate-950/60 hover:bg-white/10"
              }`}
            >
              <Icon
                className={`mb-4 ${
                  selected ? "text-cyan-300" : "text-slate-400"
                }`}
              />

              <h3 className="font-bold">{role.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {role.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}