import logoFull from "@/assets/enfactum-logo.webp";
import logoFact from "@/assets/enfactum-fact-mark.webp";

export function EnfactumLogo({ size = 24, className = "" }: { size?: number; className?: string }) {
  // Image has black "en/um" + blue "fact". Use directly on light theme.
  // On dark theme, render CSS-typeset version with white "en/um" so it stays legible.
  return (
    <span className={`inline-flex items-center ${className}`} style={{ height: size }}>
      <img
        src={logoFull}
        alt="enfactum"
        style={{ height: size, width: "auto" }}
        className="block dark:hidden select-none"
        draggable={false}
      />
      <span
        className="hidden dark:inline-flex font-bold tracking-tight"
        style={{ fontSize: size }}
      >
        <span className="text-white">en</span>
        <span className="text-brand-blue">fact</span>
        <span className="text-white">um</span>
      </span>
    </span>
  );
}

export function SymbolMark({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <img
      src={logoFact}
      alt="fact"
      style={{ height: size, width: "auto" }}
      className={`inline-block select-none ${className}`}
      draggable={false}
    />
  );
}

export function MonochromeMark({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <span className={`font-bold tracking-tight text-foreground ${className}`} style={{ fontSize: size }}>
      enfactum
    </span>
  );
}
