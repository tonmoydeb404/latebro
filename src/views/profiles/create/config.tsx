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
  { id: 1, label: "Personal Info", icon: <LucideUser2 /> },
  { id: 2, label: "Contacts", icon: <LucideContact2 /> },
  { id: 3, label: "Educations", icon: <LucideGraduationCap /> },
  { id: 4, label: "Experiences", icon: <LucideBriefcase /> },
  { id: 5, label: "Projects", icon: <LucideStar /> },
  { id: 6, label: "Technical Skills", icon: <LucidePencilRuler /> },
  { id: 7, label: "Language Skills", icon: <LucideLanguages /> },
  { id: 8, label: "Socials", icon: <LucideLink2 /> },
];
