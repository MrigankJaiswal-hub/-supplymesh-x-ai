import { useState } from "react";
import {
  Mic,
  MicOff,
  Sparkles,
  Radio,
  AlertTriangle,
  Route,
  Bell,
} from "lucide-react";
import { motion } from "framer-motion";
import useShipments from "../hooks/useShipments";

export default function VoiceAIControlPanel() {
  const { shipments } = useShipments();
  const [listening, setListening] = useState(false);
  const [command, setCommand] = useState("");
  const [response, setResponse] = useState(null);

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice recognition is not supported in this browser. Use Google Chrome.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN";
    recognition.interimResults = false;
    recognition.continuous = false;

    setListening(true);

    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setCommand(transcript);
      processCommand(transcript);
      setListening(false);
    };

    recognition.onerror = () => {
      setListening(false);
      alert("Voice recognition failed. Please try again.");
    };

    recognition.onend = () => {
      setListening(false);
    };
  };

  const processCommand = (text) => {
    const lower = text.toLowerCase();

    const highRisk = shipments.filter((item) => item.risk > 60);
    const applied = shipments.filter((item) => item.recoveryApplied);

    if (lower.includes("high risk")) {
      setResponse({
        icon: AlertTriangle,
        title: "High Risk Shipments Found",
        message: `${highRisk.length} shipments need attention: ${
          highRisk.map((item) => item.shipmentId).join(", ") || "None"
        }`,
        color: "text-red-300",
      });
      return;
    }

    if (lower.includes("apply") || lower.includes("route")) {
      setResponse({
        icon: Route,
        title: "AI Route Recommendation",
        message:
          "Open the AI Risk table and click Recommend Route to apply the optimized recovery path.",
        color: "text-cyan-300",
      });
      return;
    }

    if (lower.includes("alert") || lower.includes("partner")) {
      setResponse({
        icon: Bell,
        title: "Partner Alert Workflow",
        message:
          "Partner alerts are available inside the AI Recovery Modal. Sent alerts are logged in Firestore.",
        color: "text-emerald-300",
      });
      return;
    }

    if (lower.includes("mumbai") || lower.includes("rainfall")) {
      setResponse({
        icon: Radio,
        title: "Scenario Detected",
        message:
          "Mumbai rainfall scenario may affect Delhi-Mumbai shipments. Recommended corridor: Delhi → Jaipur → Vadodara → Mumbai.",
        color: "text-yellow-300",
      });
      return;
    }

    if (lower.includes("status") || lower.includes("summary")) {
      setResponse({
        icon: Sparkles,
        title: "System Summary",
        message: `${shipments.length} shipments monitored. ${applied.length} AI recovery actions applied in real time.`,
        color: "text-purple-300",
      });
      return;
    }

    setResponse({
      icon: Sparkles,
      title: "AI Command Received",
      message:
        "Try commands like: show high risk shipments, Mumbai rainfall scenario, send partner alert, or system summary.",
      color: "text-cyan-300",
    });
  };

  const ResponseIcon = response?.icon;

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="mb-5 flex items-center gap-3">
        <div className="rounded-2xl bg-purple-400/10 p-3">
          <Mic className="text-purple-300" />
        </div>

        <div>
          <h2 className="text-2xl font-bold">Voice AI Control Panel</h2>
          <p className="text-sm text-slate-400">
            Control the logistics command center using voice prompts.
          </p>
        </div>
      </div>

      <div className="rounded-3xl border border-purple-400/20 bg-purple-400/10 p-5">
        <p className="text-sm text-slate-300">Try saying:</p>

        <div className="mt-3 grid gap-3 text-sm md:grid-cols-2">
          <div className="rounded-2xl bg-slate-950/60 p-3">
            “Show high risk shipments”
          </div>
          <div className="rounded-2xl bg-slate-950/60 p-3">
            “What if Mumbai rainfall increases?”
          </div>
          <div className="rounded-2xl bg-slate-950/60 p-3">
            “Send alert to partner”
          </div>
          <div className="rounded-2xl bg-slate-950/60 p-3">
            “Show system summary”
          </div>
        </div>
      </div>

      <button
        onClick={startListening}
        className={`mt-5 flex w-full items-center justify-center gap-3 rounded-full px-6 py-4 font-bold transition ${
          listening
            ? "bg-red-400 text-slate-950"
            : "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
        }`}
      >
        {listening ? <MicOff /> : <Mic />}
        {listening ? "Listening..." : "Start Voice Command"}
      </button>

      {command && (
        <div className="mt-5 rounded-2xl bg-slate-900 p-4">
          <p className="text-xs text-slate-500">Voice Command</p>
          <h3 className="mt-1 font-semibold text-white">“{command}”</h3>
        </div>
      )}

      {response && ResponseIcon && (
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-5 rounded-3xl border border-cyan-400/20 bg-slate-950/70 p-5"
        >
          <div className="mb-3 flex items-center gap-2">
            <ResponseIcon className={response.color} />
            <h3 className={`font-bold ${response.color}`}>{response.title}</h3>
          </div>

          <p className="text-sm leading-6 text-slate-300">{response.message}</p>
        </motion.div>
      )}
    </div>
  );
}