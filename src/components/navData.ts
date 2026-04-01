import {
  BookOpen, Palette, Type, Eye, Image, Play, MessageSquare,
  Linkedin, Layout, BarChart2, MousePointer, Globe, FileText, Sparkles
} from "lucide-react";

export interface NavSection {
  group: string;
  items: { id: string; label: string; icon: React.ElementType }[];
}

export const navSections: NavSection[] = [
  {
    group: "Identity",
    items: [
      { id: "brand-story", label: "Brand Story", icon: BookOpen },
      { id: "logo-guidelines", label: "Logo Guidelines", icon: Sparkles },
      { id: "color-system", label: "Color System", icon: Palette },
      { id: "typography", label: "Typography", icon: Type },
    ],
  },
  {
    group: "Visual Language",
    items: [
      { id: "visual-style", label: "Visual Style", icon: Eye },
      { id: "mood-board", label: "Mood Board", icon: Image },
      { id: "motion", label: "Motion & Animation", icon: Play },
    ],
  },
  {
    group: "Voice",
    items: [
      { id: "voice-tone", label: "Voice & Tone", icon: MessageSquare },
      { id: "linkedin", label: "LinkedIn Playbook", icon: Linkedin },
    ],
  },
  {
    group: "Product",
    items: [
      { id: "ui-components", label: "UI Components", icon: Layout },
      { id: "data-viz", label: "Data Visualization", icon: BarChart2 },
      { id: "interaction", label: "Interaction States", icon: MousePointer },
    ],
  },
  {
    group: "Application",
    items: [
      { id: "sea-market", label: "SEA Market Adaptation", icon: Globe },
      { id: "ppt-templates", label: "PPT Templates", icon: FileText },
    ],
  },
];
