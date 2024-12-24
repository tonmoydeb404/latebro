import { EditorColors } from "@/types/editor";
import { StyleSheet } from "@react-pdf/renderer";

const FONT_SIZE = {
  xs: 10.5,
  sm: 11,
  md: 12,
  lg: 14,
  xl: 24,
};

const COLORS: EditorColors = {
  foreground: "#333333",
  secondary: "#666666",
  background: "#FFFFFF",
  muted: "#E0E0E0",
  primary: "#007BFF",
};

export const createStyles = (theme?: EditorColors) => {
  const colors = { ...COLORS, ...theme };

  return StyleSheet.create({
    page: {
      padding: 40,
      backgroundColor: colors.background,
      fontFamily: "Inter",
      fontWeight: "normal",
    },
    main: {
      flexDirection: "row",
      gap: 40,
    },
    left_column: {
      flex: 2,
    },
    right_column: {
      flex: 1,
    },
    // Header ----------------------------------------------------------------------
    header: {
      flexDirection: "row",
      marginBottom: 20,
      alignItems: "center",
    },
    header_content: {
      flex: 1,
    },
    avatar: {
      width: 60,
      height: 60,
      borderRadius: 30,
      marginRight: 15,
    },
    title: {
      fontSize: FONT_SIZE.xl,
      fontWeight: 600,
      marginBottom: 4,
    },
    subtitle: {
      fontSize: FONT_SIZE.lg,
      color: colors.secondary,
    },
    // Section ----------------------------------------------------------------------
    section: {
      marginBottom: 20,
    },
    section_title: {
      fontSize: 16,
      fontWeight: 600,
      marginBottom: 12,
    },
    paragraph: {
      fontSize: FONT_SIZE.md,
      lineHeight: 1.5,
      color: colors.foreground,
    },

    // Project ----------------------------------------------------------------------
    projects: {
      rowGap: 15,
    },
    project_header: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 5,
    },
    project_title: {
      fontWeight: "medium",
      fontSize: FONT_SIZE.lg,
    },
    project_links: { marginLeft: "auto", flexDirection: "row" },
    project_link: { fontSize: FONT_SIZE.sm, textDecoration: "none" },
    project_divider: {
      fontSize: FONT_SIZE.sm,
      marginLeft: 5,
      marginRight: 5,
    },
    project_desc: { fontSize: FONT_SIZE.md, marginBottom: 8 },
    project_tools: {
      color: colors.secondary,
      fontSize: FONT_SIZE.xs,
      textTransform: "uppercase",
    },
    // Experience ----------------------------------------------------------------------
    exps: {
      rowGap: 15,
    },
    exp_header: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 5,
    },
    exp_company: {
      fontSize: 13,
      fontWeight: 600,
      marginBottom: 2,
    },
    exp_position: {
      fontSize: FONT_SIZE.md,
      marginBottom: 2,
    },
    exp_date: {
      fontSize: FONT_SIZE.sm,
      color: colors.secondary,
    },
    exp_desc_point: {
      fontSize: FONT_SIZE.md,
      marginBottom: 2,
      paddingLeft: 10,
    },
    // Educations ----------------------------------------------------------------------
    educations: {
      rowGap: 15,
    },
    educations_institute: {
      fontSize: 13,
      fontWeight: 500,
      marginBottom: 4,
    },
    educations_subject: {
      fontSize: FONT_SIZE.md,
    },
    educations_date: {
      fontSize: FONT_SIZE.sm,
      color: colors.secondary,
    },
    // Contacts ----------------------------------------------------------------------
    contact_item: {
      marginBottom: 8,
    },
    contact_label: {
      fontSize: FONT_SIZE.sm,
      color: colors.secondary,
      marginBottom: 3,
    },
    contact_text: {
      fontSize: FONT_SIZE.md,
      color: "#000",
      textDecoration: "none",
    },

    // Socials ----------------------------------------------------------------------
    socials: {
      rowGap: 6,
    },
    socials_item: {
      fontSize: FONT_SIZE.md,
      color: colors.foreground,
      textDecoration: "none",
    },

    // Languages ----------------------------------------------------------------------
    languages: {
      rowGap: 8,
    },
    language_item: {
      flexDirection: "row",
      columnGap: 3,
      alignItems: "center",
    },
    language_title: {
      fontSize: FONT_SIZE.md,
    },
    language_experience: {
      fontSize: FONT_SIZE.sm,
      textTransform: "uppercase",
      color: colors.secondary,
    },

    // Skills ----------------------------------------------------------------------
    skills: {
      rowGap: 15,
    },
    skill_title: {
      fontSize: FONT_SIZE.sm,
      marginBottom: 4,
    },
    skill_bar: {
      backgroundColor: colors.muted,
      borderRadius: 2,
      overflow: "hidden",
    },
    skill_progress: {
      height: 3,
      backgroundColor: colors.primary,
    },
  });
};

export const template3Styles = {
  colors: COLORS,
  fontSizes: FONT_SIZE,
};
