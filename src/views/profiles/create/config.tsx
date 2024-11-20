import {
  LucideBriefcase,
  LucideContact2,
  LucideGraduationCap,
  LucideLanguages,
  LucideLink2,
  LucidePencilRuler,
  LucideStar,
  LucideUser2,
} from "lucide-react";
import { ReactNode } from "react";

export type NavItem = { icon: ReactNode; id: number; label: string };

export const navs: NavItem[] = [
  { id: 0, label: "Personal Info", icon: <LucideUser2 /> },
  { id: 1, label: "Contacts", icon: <LucideContact2 /> },
  { id: 2, label: "Educations", icon: <LucideGraduationCap /> },
  { id: 3, label: "Experiences", icon: <LucideBriefcase /> },
  { id: 4, label: "Projects", icon: <LucideStar /> },
  { id: 5, label: "Technical Skills", icon: <LucidePencilRuler /> },
  { id: 6, label: "Language Skills", icon: <LucideLanguages /> },
  { id: 7, label: "Socials", icon: <LucideLink2 /> },
];
