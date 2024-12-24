import {
  LucideBriefcase,
  LucideContact2,
  LucideEdit,
  LucideFile,
  LucideGraduationCap,
  LucideLanguages,
  LucideLink2,
  LucidePalette,
  LucidePencilRuler,
  LucideStar,
  LucideUser2,
} from "lucide-react";

export type NavItem = { icon: React.ElementType; id: number; label: string };
export type GroupItem = { childs: NavItem[] };

export const navGroups: GroupItem[] = [
  {
    childs: [
      { id: 0, label: "Personal Info", icon: LucideUser2 },
      { id: 1, label: "Contacts", icon: LucideContact2 },
      { id: 2, label: "Educations", icon: LucideGraduationCap },
      { id: 3, label: "Experiences", icon: LucideBriefcase },
      { id: 4, label: "Projects", icon: LucideStar },
      { id: 5, label: "Technical Skills", icon: LucidePencilRuler },
      { id: 6, label: "Language Skills", icon: LucideLanguages },
      { id: 7, label: "Socials", icon: LucideLink2 },
    ],
  },
  {
    childs: [{ id: 8, label: "Colors", icon: LucidePalette }],
  },
];

// ----------------------------------------------------------------------

export type TabItem = { icon: React.ElementType; id: number; label: string };

export const tabs: TabItem[] = [
  { id: 0, label: "Editor", icon: LucideEdit },
  { id: 1, label: "Preview", icon: LucideFile },
];
