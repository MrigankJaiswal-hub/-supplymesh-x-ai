import { Bell, Radio, ShieldCheck } from "lucide-react";
import useAlerts from "../hooks/useAlerts";

export default function LiveAlertsPanel() {
  const { alerts, loading } = useAlerts();

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="mb-5 flex items-center gap-3">
        <div className="rounded-2xl bg-cyan-400/10 p-3">
          <Bell className="text-cyan-300" />
        </div>

        <div>
          <h2 className="text-2xl font-bold">Live Partner Alerts</h2>
          <p className="text-sm text-slate-400">
            Real-time Firestore alert log for recovery actions.
          </p>
        </div>
      </div>

      {loading && (
        <p className="text-sm text-slate-400">Loading alerts...</p>
      )}

      {!loading && alerts.length === 0 && (
        <div className="rounded-2xl bg-slate-900 p-5 text-sm text-slate-400">
          No alerts sent yet. Open a shipment and click “Send Alert to Partner”.
        </div>
      )}

      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="rounded-2xl border border-cyan-400/10 bg-slate-900 p-5"
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Radio size={18} className="text-cyan-300" />
                <h3 className="font-bold">{alert.shipmentId}</h3>
              </div>

              <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                {alert.status || "Alert Sent"}
              </span>
            </div>

            <p className="text-sm leading-6 text-slate-300">
              {alert.message}
            </p>

            <div className="mt-4 grid gap-3 text-xs text-slate-400 md:grid-cols-3">
              <div className="rounded-xl bg-white/5 p-3">
                <p>Partner</p>
                <h4 className="mt-1 font-semibold text-white">
                  {alert.partner || "Logistics Partner"}
                </h4>
              </div>

              <div className="rounded-xl bg-white/5 p-3">
                <p>Channel</p>
                <h4 className="mt-1 font-semibold text-white">
                  {alert.channel || "Prototype Notification"}
                </h4>
              </div>

              <div className="rounded-xl bg-white/5 p-3">
                <p>Risk</p>
                <h4 className="mt-1 font-semibold text-white">
                  {alert.risk || "N/A"}%
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      {alerts.length > 0 && (
        <div className="mt-5 flex items-center gap-2 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm text-emerald-300">
          <ShieldCheck size={18} />
          Recovery communication trail stored successfully.
        </div>
      )}
    </div>
  );
}