import { Sun, Moon, Search } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { EnfactumLogo } from "./EnfactumLogo";
import { navSections } from "./navData";

interface SidebarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
  onOpenSearch: () => void;
}

export function BrandSidebar({ activeSection, onNavigate }: SidebarProps) {
  const { theme, toggle } = useTheme();

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-60 bg-surface border-r border-border flex flex-col z-50">
      {/* Logo */}
      <div className="px-5 pt-6 pb-4">
        <EnfactumLogo size={22} />
        <div className="mt-1 text-[10px] font-medium tracking-[0.15em] uppercase text-muted">
          Brandbook
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 pb-4">
        {navSections.map((section) => (
          <div key={section.group} className="mb-4">
            <div className="px-2 mb-1 text-[10px] font-semibold tracking-[0.12em] uppercase text-muted">
              {section.group}
            </div>
            {section.items.map((item) => {
              const active = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-[13px] font-medium transition-colors relative ${
                    active
                      ? "bg-[hsl(var(--sidebar-accent))] text-primary border-l-2 border-primary"
                      : "text-text-secondary hover:bg-elevated hover:text-foreground border-l-2 border-transparent"
                  }`}
                >
                  <item.icon size={16} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Theme toggle */}
      <div className="px-4 py-4 border-t border-border">
        <button
          onClick={toggle}
          className="flex items-center gap-2 text-[13px] text-text-secondary hover:text-foreground transition-colors"
        >
          {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
        </button>
      </div>
    </aside>
  );
}
