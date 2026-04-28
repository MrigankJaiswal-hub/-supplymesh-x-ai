import { useState } from "react";
import useShipments from "../hooks/useShipments";
import AIRecoveryModal from "./AIRecoveryModal";

export default function RiskTable() {
  const { shipments, loading } = useShipments();
  const [selectedShipment, setSelectedShipment] = useState(null);

  if (loading) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-400 backdrop-blur-xl">
        Loading live shipment intelligence...
      </div>
    );
  }

  const getRiskStyle = (risk) => {
    if (risk > 80) return "bg-red-500/20 text-red-300";
    if (risk > 60) return "bg-yellow-500/20 text-yellow-300";
    return "bg-emerald-500/20 text-emerald-300";
  };

  const getStatusStyle = (status) => {
    if (status === "AI Route Applied") {
      return "bg-cyan-400/20 text-cyan-300";
    }

    if (status === "High Risk") {
      return "bg-red-500/20 text-red-300";
    }

    if (status === "Medium Risk") {
      return "bg-yellow-500/20 text-yellow-300";
    }

    return "bg-emerald-500/20 text-emerald-300";
  };

  return (
    <>
      <div
        id="risk"
        className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
      >
        <div className="mb-6">
          <h2 className="text-2xl font-bold">AI Disruption Risk Monitor</h2>
          <p className="text-sm text-slate-400">
            Live Firestore-powered risk scoring for active shipments.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[980px] text-left">
            <thead>
              <tr className="border-b border-white/10 text-sm text-slate-400">
                <th className="pb-4">Shipment</th>
                <th className="pb-4">Route</th>
                <th className="pb-4">Risk</th>
                <th className="pb-4">Status</th>
                <th className="pb-4">Reason</th>
                <th className="pb-4">AI Action</th>
              </tr>
            </thead>

            <tbody>
              {shipments.map((item) => {
                const routeApplied =
                  item.status === "AI Route Applied" ||
                  item.recoveryApplied === true;

                return (
                  <tr key={item.id} className="border-b border-white/5">
                    <td className="py-5 font-semibold">{item.shipmentId}</td>

                    <td className="py-5 text-slate-300">{item.route}</td>

                    <td className="py-5">
                      <span
                        className={`rounded-full px-3 py-1 text-sm font-semibold ${getRiskStyle(
                          item.risk
                        )}`}
                      >
                        {item.risk}%
                      </span>
                    </td>

                    <td className="py-5">
                      <span
                        className={`rounded-full px-3 py-1 text-sm font-semibold ${getStatusStyle(
                          item.status
                        )}`}
                      >
                        {item.status || "Normal"}
                      </span>
                    </td>

                    <td className="py-5 text-slate-400">{item.reason}</td>

                    <td className="py-5">
                      <button
                        disabled={routeApplied}
                        onClick={() => setSelectedShipment(item)}
                        className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                          routeApplied
                            ? "cursor-not-allowed bg-white/10 text-slate-400"
                            : "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                        }`}
                      >
                        {routeApplied ? "Route Applied" : "Recommend Route"}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {shipments.length === 0 && (
            <p className="mt-6 text-sm text-slate-400">
              No shipment data found.
            </p>
          )}
        </div>
      </div>

      <AIRecoveryModal
        shipment={selectedShipment}
        onClose={() => setSelectedShipment(null)}
      />
    </>
  );
}