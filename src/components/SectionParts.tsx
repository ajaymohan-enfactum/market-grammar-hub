import { type ReactNode } from "react";

export function SectionWrapper({ id, children }: { id: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-16 pb-16 border-b border-border last:border-b-0">
      {children}
    </section>
  );
}

export function SectionHeader({ title, subtitle, action }: { title: string; subtitle: string; action?: ReactNode }) {
  return (
    <div className="mb-10">
      <div className="flex items-start justify-between gap-4">
        <h1 className="text-[40px] font-bold leading-tight text-foreground">{title}</h1>
        {action}
      </div>
      <p className="mt-3 text-lg text-text-secondary leading-relaxed max-w-[720px]">{subtitle}</p>
    </div>
  );
}
