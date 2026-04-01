import {
  Menu, X, Search, Settings, Home, ArrowRight, ArrowLeft, ArrowUp, ArrowDown, ChevronRight, ChevronDown,
  User, Bell, Mail, Shield, Link, Database, Cloud, Lock,
  BarChart2, TrendingUp, PieChart, Activity, Target, Zap, Globe, Map, Crosshair
} from "lucide-react";
import { SectionWrapper, SectionHeader, Eyebrow } from "../SectionParts";

import visualPrimary3d from "@/assets/visual-primary-3d.jpg";
import visualMarketArch from "@/assets/visual-market-arch.jpg";
import visualStructural from "@/assets/visual-structural.jpg";
import visualGeometricIntersect from "@/assets/visual-geometric-intersect.jpg";
import visualLinearSignal from "@/assets/visual-linear-signal.jpg";

function IconGrid({ label, icons }: { label: string; icons: { icon: React.ElementType; name: string }[] }) {
  return (
    <div className="mb-6">
      <Eyebrow className="mb-3">{label}</Eyebrow>
      <div className="flex flex-wrap gap-4">
        {icons.map(({ icon: Icon, name }) => (
          <div key={name} className="flex flex-col items-center gap-1.5 w-16">
            <div className="w-10 h-10 bg-elevated rounded-lg flex items-center justify-center transition-colors duration-200">
              <Icon size={20} className="text-foreground" />
            </div>
            <span className="text-[10px] text-muted">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlaceholderCard({ name }: { name: string }) {
  return (
    <div className="bg-elevated dark:bg-brand-neutral-700 border border-border-subtle rounded-xl h-24 flex flex-col items-center justify-center gap-2 transition-colors duration-200">
      <Crosshair size={16} className="text-muted opacity-40" />
      <span className="text-[11px] uppercase tracking-[0.08em] font-medium text-muted">{name}</span>
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
      <Eyebrow className="mb-2">Photography & Imagery Principles</Eyebrow>
      <p className="text-[13px] text-text-secondary mb-6">
        Our imagery revolves around 3D abstract geometric forms and architectural structures. We strictly avoid literal people-in-action in favor of immersive environments that convey scale, precision, and market density.
      </p>

      <div className="grid grid-cols-3 gap-4 mb-10">
        {[
          { label: "Primary 3D Elements — Immersive, abstract 3D blocks and market infrastructure.", img: visualPrimary3d },
          { label: "Market Architecture — Expansive structural environments suggesting infinite scale.", img: visualMarketArch },
          { label: "Structural Patterns — Repeating geometric patterns reinforcing stability and signal capture.", img: visualStructural },
        ].map(({ label, img }) => (
          <div key={label} className="bg-brand-midnight rounded-xl h-[300px] relative overflow-hidden flex items-end">
            <img src={img} alt={label} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            <span className="relative z-10 text-[11px] text-white/80 leading-snug p-4 bg-gradient-to-t from-black/60 to-transparent w-full">{label}</span>
          </div>
        ))}
      </div>

      {/* Secondary */}
      <Eyebrow className="mb-4">Secondary Abstractions</Eyebrow>
      <div className="grid grid-cols-2 gap-4 mb-10">
        {[
          { label: "Geometric Intersections — Wireframe-like abstractions representing signal flow.", img: visualGeometricIntersect },
          { label: "Linear Signal & Light — Luminescent lines representing territory architecture and data density.", img: visualLinearSignal },
        ].map(({ label, img }) => (
          <div key={label} className="bg-brand-midnight rounded-xl h-[200px] relative overflow-hidden flex items-end">
            <img src={img} alt={label} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            <span className="relative z-10 text-[11px] text-white/80 leading-snug p-4 bg-gradient-to-t from-black/60 to-transparent w-full">{label}</span>
          </div>
        ))}
      </div>

      {/* Graphic elements */}
      <Eyebrow className="mb-2">Graphic Elements</Eyebrow>
      <p className="text-[13px] text-text-secondary mb-4">
        Clean, rigid, strictly geometric vector elements that frame content and create hierarchy without overpowering 3D aesthetic.
      </p>
      <div className="grid grid-cols-4 gap-3 mb-10">
        {["Nested Squares", "Grid Matrix", "Stepped Progress", "Crosshair Anchor"].map((name) => (
          <PlaceholderCard key={name} name={name} />
        ))}
      </div>

      {/* Iconography */}
      <div className="brand-card p-6">
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
