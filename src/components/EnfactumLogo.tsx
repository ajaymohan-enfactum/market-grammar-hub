export function EnfactumLogo({ size = 24, className = "" }: { size?: number; className?: string }) {
  const fontSize = size;
  return (
    <span className={`font-bold tracking-tight ${className}`} style={{ fontSize }}>
      <span className="text-foreground">en</span>
      <span className="text-brand-blue">fact</span>
      <span className="text-foreground">um</span>
    </span>
  );
}

export function SymbolMark({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <span className={`font-bold tracking-tight text-brand-blue ${className}`} style={{ fontSize: size }}>
      fact
    </span>
  );
}

export function MonochromeMark({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <span className={`font-bold tracking-tight text-foreground ${className}`} style={{ fontSize: size }}>
      enfactum
    </span>
  );
}
