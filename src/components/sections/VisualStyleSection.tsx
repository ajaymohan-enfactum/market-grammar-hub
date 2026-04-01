import {
  Menu, X, Search, Settings, Home, ArrowRight, ArrowLeft, ArrowUp, ArrowDown, ChevronRight, ChevronDown,
  User, Bell, Mail, Shield, Link, Database, Cloud, Lock,
  BarChart2, TrendingUp, PieChart, Activity, Target, Zap, Globe, Map
} from "lucide-react";
import { SectionWrapper, SectionHeader } from "../SectionParts";

function IconGrid({ label, icons }: { label: string; icons: { icon: React.ElementType; name: string }[] }) {
  return (
    <div className="mb-6">
      <div className="text-[10px] font-semibold tracking-[0.12em] uppercase text-muted mb-3">{label}</div>
      <div className="flex flex-wrap gap-4">
        {icons.map(({ icon: Icon, name }) => (
          <div key={name} className="flex flex-col items-center gap-1.5 w-16">
            <div className="w-10 h-10 bg-elevated rounded-lg flex items-center justify-center">
              <Icon size={20} className="text-foreground" />
            </div>
            <span className="text-[10px] text-muted">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function VisualStyleSection() {
  return (
    <SectionWrapper id="visual-style">
      <SectionHeader
        title="Visual Style"
        subtitle="Immersive, geometric, and structured. Rooted in 3D abstract architecture and geometric precision."
      />

      {/* Photography */}
      <h3 className="text-xs font-semibold tracking-[0.12em] uppercase text-muted mb-2">Photography & Imagery Principles</h3>
      <p className="text-[13px] text-text-secondary mb-6">
        Our imagery revolves around 3D abstract geometric forms and architectural structures. We strictly avoid literal people-in-action in favor of immersive environments that convey scale, precision, and market density.
      </p>

      <div className="grid grid-cols-3 gap-4 mb-10">
        {[
          "Primary 3D Elements — Immersive, abstract 3D blocks and market infrastructure.",
          "Market Architecture — Expansive structural environments suggesting infinite scale.",
          "Structural Patterns — Repeating geometric patterns reinforcing stability and signal capture.",
        ].map((label) => (
          <div key={label} className="bg-brand-midnight rounded-lg h-[300px] flex items-end p-4">
            <span className="text-[11px] text-brand-neutral-400 leading-snug">{label}</span>
          </div>
        ))}
      </div>

      {/* Secondary */}
      <h3 className="text-xs font-semibold tracking-[0.12em] uppercase text-muted mb-4">Secondary Abstractions</h3>
      <div className="grid grid-cols-2 gap-4 mb-10">
        {[
          "Geometric Intersections — Wireframe-like abstractions representing signal flow.",
          "Linear Signal & Light — Luminescent lines representing territory architecture and data density.",
        ].map((label) => (
          <div key={label} className="bg-brand-midnight rounded-lg h-[200px] flex items-end p-4">
            <span className="text-[11px] text-brand-neutral-400 leading-snug">{label}</span>
          </div>
        ))}
      </div>

      {/* Graphic elements */}
      <h3 className="text-xs font-semibold tracking-[0.12em] uppercase text-muted mb-2">Graphic Elements</h3>
      <p className="text-[13px] text-text-secondary mb-4">
        Clean, rigid, strictly geometric vector elements that frame content and create hierarchy without overpowering 3D aesthetic.
      </p>
      <div className="grid grid-cols-4 gap-3 mb-10">
        {["Nested Squares", "Grid Matrix", "Stepped Progress", "Crosshair Anchor"].map((name) => (
          <div key={name} className="bg-surface border border-border rounded-lg h-24 flex items-center justify-center">
            <span className="text-[12px] font-medium text-muted">{name}</span>
          </div>
        ))}
      </div>

      {/* Iconography */}
      <div className="bg-surface border border-border rounded-lg p-6">
        <h4 className="text-[15px] font-semibold text-foreground mb-1">Complete Iconography Set</h4>
        <p className="text-[13px] text-text-secondary mb-5">Icons built on a strict 24px grid with a consistent 2px stroke. Sharp geometries and clear silhouettes matching IBM Plex Sans typography.</p>

        <IconGrid label="Navigation & Interface" icons={[
          { icon: Menu, name: "Menu" }, { icon: X, name: "X" }, { icon: Search, name: "Search" },
          { icon: Settings, name: "Settings" }, { icon: Home, name: "Home" },
          { icon: ArrowRight, name: "ArrowRight" }, { icon: ArrowLeft, name: "ArrowLeft" },
          { icon: ArrowUp, name: "ArrowUp" }, { icon: ArrowDown, name: "ArrowDown" },
          { icon: ChevronRight, name: "ChevronRight" }, { icon: ChevronDown, name: "ChevronDown" },
        ]} />
        <IconGrid label="Core Concepts" icons={[
          { icon: User, name: "User" }, { icon: Bell, name: "Bell" }, { icon: Mail, name: "Mail" },
          { icon: Shield, name: "Shield" }, { icon: Link, name: "Link" },
          { icon: Database, name: "Database" }, { icon: Cloud, name: "Cloud" }, { icon: Lock, name: "Lock" },
        ]} />
        <IconGrid label="Data & Analytics" icons={[
          { icon: BarChart2, name: "BarChart2" }, { icon: TrendingUp, name: "TrendingUp" },
          { icon: PieChart, name: "PieChart" }, { icon: Activity, name: "Activity" },
          { icon: Target, name: "Target" }, { icon: Zap, name: "Zap" },
          { icon: Globe, name: "Globe" }, { icon: Map, name: "Map" },
        ]} />
      </div>
    </SectionWrapper>
  );
}
