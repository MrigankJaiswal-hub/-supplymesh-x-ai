import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";

const demoShipments = [
  {
    shipmentId: "SH-1024",
    route: "Delhi → Mumbai",
    originalRoute: "Delhi → Mumbai",
    risk: 91,
    status: "High Risk",
    reason: "Heavy rainfall + highway congestion",
    eta: "18 hrs",
    aiRoute: "Delhi → Jaipur → Vadodara → Mumbai",
    savings: "ETA reduced by 7 hours",
    carbonSaved: 18,
    recoveryApplied: false,
    createdAt: serverTimestamp(),
  },
  {
    shipmentId: "SH-1188",
    route: "Chennai → Bengaluru",
    originalRoute: "Chennai → Bengaluru",
    risk: 72,
    status: "Medium Risk",
    reason: "Port backlog + warehouse delay",
    eta: "9 hrs",
    aiRoute: "Chennai → Vellore → Bengaluru",
    savings: "Delay risk reduced by 42%",
    carbonSaved: 9,
    recoveryApplied: false,
    createdAt: serverTimestamp(),
  },
];

export async function resetDemoData() {
  const snapshot = await getDocs(collection(db, "shipments"));

  const deletePromises = snapshot.docs.map((item) =>
    deleteDoc(doc(db, "shipments", item.id))
  );

  await Promise.all(deletePromises);

  const addPromises = demoShipments.map((shipment) =>
    addDoc(collection(db, "shipments"), shipment)
  );

  await Promise.all(addPromises);

  alert("Demo data reset successfully!");
}

export async function seedShipments() {
  await resetDemoData();
}

export async function triggerMumbaiCrisisMode() {
  const snapshot = await getDocs(collection(db, "shipments"));

  const crisisUpdates = snapshot.docs.map((item) => {
    const data = item.data();

    let updatePayload = {
      crisisMode: true,
      crisisType: "Mumbai Port Disruption",
      crisisSeverity: "Critical",
      crisisMessage:
        "Mumbai region disruption detected. AI crisis mode activated.",
      updatedAt: serverTimestamp(),
    };

    if (
      data.route?.toLowerCase().includes("mumbai") ||
      data.aiRoute?.toLowerCase().includes("mumbai")
    ) {
      updatePayload = {
        ...updatePayload,
        risk: 96,
        status: "Critical Crisis",
        reason: "Mumbai port disruption + rainfall + highway congestion",
        aiRoute: "Delhi → Jaipur → Vadodara → Navi Mumbai Relief Corridor",
        recoveryApplied: false,
        alertSent: false,
      };
    }

    return updateDoc(doc(db, "shipments", item.id), updatePayload);
  });

  await Promise.all(crisisUpdates);

  await addDoc(collection(db, "alerts"), {
    shipmentId: "CRISIS-MUMBAI",
    status: "Crisis Mode Activated",
    risk: 96,
    partner: "All Logistics Partners",
    channel: "AI Crisis Broadcast",
    message:
      "Autonomous Crisis Mode activated for Mumbai disruption. AI recommends rerouting affected shipments through Jaipur → Vadodara → Navi Mumbai relief corridor.",
    createdAt: serverTimestamp(),
  });

  alert("Autonomous Crisis Mode activated!");
}