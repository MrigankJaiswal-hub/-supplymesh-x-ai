export const shipments = [
  {
    id: "SH-1024",
    route: "Delhi → Mumbai",
    risk: 91,
    reason: "Heavy rainfall + highway congestion",
    eta: "18 hrs",
    status: "High Risk",
  },
  {
    id: "SH-1188",
    route: "Chennai → Bengaluru",
    risk: 72,
    reason: "Port backlog + warehouse delay",
    eta: "9 hrs",
    status: "Medium Risk",
  },
  {
    id: "SH-2210",
    route: "Kolkata → Guwahati",
    risk: 84,
    reason: "Regional strike probability",
    eta: "22 hrs",
    status: "High Risk",
  },
  {
    id: "SH-3305",
    route: "Pune → Hyderabad",
    risk: 38,
    reason: "Normal route conditions",
    eta: "11 hrs",
    status: "Low Risk",
  },
];

export const chartData = [
  { day: "Mon", delays: 12, prevented: 30 },
  { day: "Tue", delays: 18, prevented: 45 },
  { day: "Wed", delays: 15, prevented: 52 },
  { day: "Thu", delays: 24, prevented: 60 },
  { day: "Fri", delays: 20, prevented: 81 },
];