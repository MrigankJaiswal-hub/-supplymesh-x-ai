import { Menu, ShieldCheck } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <div className="flex items-center gap-2">
          <div className="rounded-xl bg-cyan-500/20 p-2">
            <ShieldCheck className="h-6 w-6 text-cyan-400" />
          </div>
          <span className="text-xl font-bold tracking-tight">SupplyMesh-X AI</span>
        </div>

        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#dashboard" className="hover:text-cyan-400">Dashboard</a>
          <a href="#risk" className="hover:text-cyan-400">AI Risk</a>
          <a href="#simulation" className="hover:text-cyan-400">Simulation</a>
          <a href="#sustainability" className="hover:text-cyan-400">Sustainability</a>
        </div>

        <button className="hidden rounded-full bg-cyan-400 px-5 py-2 font-semibold text-slate-950 hover:bg-cyan-300 md:block">
          Launch Demo
        </button>

        <Menu className="md:hidden" />
      </div>
    </nav>
  );
}