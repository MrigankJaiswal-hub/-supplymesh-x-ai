import { useState } from "react";
import {
  X,
  Route,
  Clock,
  IndianRupee,
  Leaf,
  ShieldCheck,
  Bell,
  FileDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  doc,
  updateDoc,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { jsPDF } from "jspdf";
import { db } from "../firebase/firebase";

export default function AIRecoveryModal({ shipment, onClose }) {
  const [applying, setApplying] = useState(false);
  const [sendingAlert, setSendingAlert] = useState(false);
  const [success, setSuccess] = useState("");
  const [alertSent, setAlertSent] = useState(shipment?.alertSent || false);

  if (!shipment) return null;

  const reducedRisk = Math.max(12, shipment.risk - 67);

  const handleApplyAIRoute = async () => {
    try {
      setApplying(true);

      const shipmentRef = doc(db, "shipments", shipment.id);

      await updateDoc(shipmentRef, {
        route: shipment.aiRoute || shipment.route,
        originalRoute: shipment.originalRoute || shipment.route,
        risk: reducedRisk,
        status: "AI Route Applied",
        recoveryApplied: true,
        recoveryAction: "Self-healing AI route applied",
        recoveryReason:
          "Route updated after AI analyzed weather, traffic, ETA, cost, and carbon impact.",
        updatedAt: serverTimestamp(),
      });

      setSuccess("AI route applied successfully. Firestore updated in real time.");
      setApplying(false);
    } catch (error) {
      console.error("Failed to apply AI route:", error);
      alert("Failed to apply AI route. Check Firebase rules or console error.");
      setApplying(false);
    }
  };

  const handleSendAlert = async () => {
    try {
      setSendingAlert(true);

      await addDoc(collection(db, "alerts"), {
        shipmentId: shipment.shipmentId,
        route: shipment.aiRoute || shipment.route,
        oldRoute: shipment.originalRoute || shipment.route,
        risk: shipment.risk,
        status: "Partner Alert Sent",
        message: `AI recovery alert: Shipment ${shipment.shipmentId} should use optimized route ${
          shipment.aiRoute || shipment.route
        }. Reason: ${shipment.reason}`,
        partner: "Logistics Partner",
        channel: "Prototype Notification",
        createdAt: serverTimestamp(),
      });

      const shipmentRef = doc(db, "shipments", shipment.id);

      await updateDoc(shipmentRef, {
        alertSent: true,
        alertStatus: "Partner Alert Sent",
        alertUpdatedAt: serverTimestamp(),
      });

      setAlertSent(true);
      setSuccess("Partner alert sent successfully and stored in Firestore.");
      setSendingAlert(false);
    } catch (error) {
      console.error("Failed to send alert:", error);
      alert("Failed to send alert. Check Firebase rules or console error.");
      setSendingAlert(false);
    }
  };

  const handleExportPDF = () => {
    const pdf = new jsPDF();

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(20);
    pdf.text("SupplyMesh-X AI Recovery Report", 20, 22);

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(11);
    pdf.text(`Generated on: ${new Date().toLocaleString()}`, 20, 32);

    pdf.setDrawColor(6, 182, 212);
    pdf.line(20, 38, 190, 38);

    let y = 52;

    const addRow = (label, value) => {
      pdf.setFont("helvetica", "bold");
      pdf.text(`${label}:`, 20, y);

      pdf.setFont("helvetica", "normal");
      const splitText = pdf.splitTextToSize(String(value), 120);
      pdf.text(splitText, 70, y);

      y += splitText.length * 7 + 4;
    };

    addRow("Shipment ID", shipment.shipmentId);
    addRow("Original Route", shipment.originalRoute || shipment.route);
    addRow("AI Recommended Route", shipment.aiRoute || "Optimized alternate corridor");
    addRow("Risk Before", `${shipment.risk}%`);
    addRow("Risk After", `${reducedRisk}%`);
    addRow("ETA Saving", "7 hours");
    addRow("Cost Saving", "18%");
    addRow("CO2 Saving", `${shipment.carbonSaved || 12} kg`);
    addRow("Alert Status", alertSent ? "Partner Alert Sent" : "Not Sent Yet");
    addRow("Reason", shipment.reason);

    y += 4;

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(14);
    pdf.text("AI Reasoning", 20, y);

    y += 8;

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(11);

    const reasoning = `The current route shows high disruption probability due to ${shipment.reason}. SupplyMesh-X AI recommends rerouting through a lower-risk corridor after analyzing weather, traffic, ETA, cost, and carbon impact. This recovery action improves ETA reliability, reduces business risk, and supports carbon-aware logistics.`;

    const reasoningLines = pdf.splitTextToSize(reasoning, 170);
    pdf.text(reasoningLines, 20, y);

    y += reasoningLines.length * 7 + 10;

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(12);
    pdf.text("Prototype Impact Summary", 20, y);

    y += 8;

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(11);
    pdf.text("• Predictive disruption detection", 20, y);
    y += 7;
    pdf.text("• AI-powered route recovery", 20, y);
    y += 7;
    pdf.text("• Real-time Firestore update", 20, y);
    y += 7;
    pdf.text("• Partner alert workflow", 20, y);
    y += 7;
    pdf.text("• Carbon-aware logistics intelligence", 20, y);

    pdf.save(`${shipment.shipmentId}-AI-Recovery-Report.pdf`);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-white/10 bg-slate-950 p-6 shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute right-5 top-5 rounded-full bg-white/10 p-2 hover:bg-white/20"
          >
            <X size={20} />
          </button>

          <div className="mb-6">
            <p className="text-sm font-semibold text-cyan-300">
              AI Recovery Recommendation
            </p>
            <h2 className="mt-2 text-3xl font-black">Self-Healing Route Plan</h2>
            <p className="mt-2 text-sm text-slate-400">
              Shipment {shipment.shipmentId} is at {shipment.risk}% disruption risk.
              SupplyMesh-X AI recommends an optimized recovery action.
            </p>
          </div>

          {success && (
            <div className="mb-5 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm font-semibold text-emerald-300">
              {success}
            </div>
          )}

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl bg-red-500/10 p-5">
              <p className="text-sm text-red-300">Current Route</p>
              <h3 className="mt-2 font-bold">
                {shipment.originalRoute || shipment.route}
              </h3>
              <p className="mt-3 text-sm text-slate-400">{shipment.reason}</p>
            </div>

            <div className="rounded-3xl bg-emerald-500/10 p-5">
              <p className="text-sm text-emerald-300">AI Recommended Route</p>
              <h3 className="mt-2 font-bold">
                {shipment.aiRoute || "Optimized alternate corridor selected"}
              </h3>
              <p className="mt-3 text-sm text-slate-400">
                Route selected by analyzing weather, traffic, ETA, cost, and carbon impact.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <Metric icon={Clock} label="ETA Saving" value="7 hrs" color="text-cyan-300" />
            <Metric icon={IndianRupee} label="Cost Saving" value="18%" color="text-yellow-300" />
            <Metric icon={Leaf} label="CO₂ Saved" value={`${shipment.carbonSaved || 12} kg`} color="text-emerald-300" />
            <Metric icon={ShieldCheck} label="Risk Reduced" value={`${shipment.risk}% → ${reducedRisk}%`} color="text-purple-300" />
          </div>

          <div className="mt-6 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-5">
            <div className="mb-3 flex items-center gap-2">
              <Route className="text-cyan-300" />
              <h3 className="font-bold">AI Reasoning</h3>
            </div>

            <p className="text-sm leading-6 text-slate-300">
              The current route shows high disruption probability due to{" "}
              <span className="text-red-300">{shipment.reason}</span>. The AI
              recovery engine recommends rerouting through a lower-risk corridor,
              reducing delay probability, improving ETA reliability, and lowering
              carbon impact.
            </p>
          </div>

          {alertSent && (
            <div className="mt-5 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-4 text-sm font-semibold text-cyan-300">
              Partner alert already sent for this shipment.
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={handleApplyAIRoute}
              disabled={applying || shipment.recoveryApplied}
              className="rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {shipment.recoveryApplied
                ? "AI Route Applied"
                : applying
                ? "Applying AI Route..."
                : "Apply AI Route"}
            </button>

            <button
              onClick={handleSendAlert}
              disabled={sendingAlert || alertSent}
              className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Bell size={18} />
              {alertSent
                ? "Alert Sent"
                : sendingAlert
                ? "Sending Alert..."
                : "Send Alert to Partner"}
            </button>

            <button
              onClick={handleExportPDF}
              className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-6 py-3 font-semibold text-emerald-300 hover:bg-emerald-400/20"
            >
              <FileDown size={18} />
              Export AI Report
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

function Metric({ icon: Icon, label, value, color }) {
  return (
    <div className="rounded-2xl bg-white/5 p-4">
      <Icon className={`mb-3 ${color}`} />
      <p className="text-xs text-slate-400">{label}</p>
      <h4 className="mt-1 text-xl font-bold">{value}</h4>
    </div>
  );
}