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

export const createStyles = (themeColors?: EditorColors) => {
  const colors = { ...COLORS, ...themeColors };

  return StyleSheet.create({
    page: {
      flexDirection: "row",
      padding: 30,
      fontSize: FONT_SIZE.md,
      color: colors.foreground,
      backgroundColor: colors.background,
      fontFamily: "Open Sans",
    },
    left_col: {
      width: "35%",
    },
    right_col: {
      paddingLeft: 25,
      width: "70%",
    },
    heading: {
      fontSize: FONT_SIZE.xl,
      fontWeight: 800,
      lineHeight: 1.4,
    },
    profession: {
      marginBottom: 20,
      fontSize: FONT_SIZE.lg,
      fontWeight: 500,
      color: colors.secondary,
    },
    section: {
      marginBottom: 15,
    },
    section_title: {
      fontSize: FONT_SIZE.lg,
      fontWeight: "bold",
      marginBottom: 10,
      textTransform: "uppercase",
    },

    // Contact ----------------------------------------------------------------------
    contact_text: {
      color: colors.foreground,
      textDecoration: "none",
    },
    contact_label: {
      fontSize: FONT_SIZE.sm,
      fontWeight: 600,
      color: colors.foreground,
    },

    // Socials ----------------------------------------------------------------------
    socials: {
      rowGap: 5,
    },
    socials_item: {
      color: colors.primary,
      textDecoration: "none",
    },

    // Skills ----------------------------------------------------------------------
    skills: {
      rowGap: 6,
    },
    skills_item: {
      flexDirection: "row",
      columnGap: 4,
    },
    skills_label: {
      fontWeight: 500,
    },
    skills_exp: {
      color: colors.secondary,
    },

    // Languages ----------------------------------------------------------------------
    languages: {
      rowGap: 6,
    },
    languages_item: {
      flexDirection: "row",
      columnGap: 4,
    },
    languages_label: {
      fontWeight: 500,
    },
    languages_exp: {
      color: colors.secondary,
    },

    // Experiences ----------------------------------------------------------------------
    exps: { rowGap: 10 },
    exp_label: { fontSize: FONT_SIZE.lg, fontWeight: 600 },
    exp_header: { flexDirection: "row", columnGap: 5, marginBottom: 5 },
    exp_position: { fontWeight: 500 },
    exp_divider: { fontSize: FONT_SIZE.sm, color: colors.secondary },
    exp_period: { fontSize: FONT_SIZE.sm, color: colors.secondary },
    exp_desc: {},

    // Projects ----------------------------------------------------------------------
    projects: { gap: 10 },
    projects_label: { fontSize: FONT_SIZE.lg, fontWeight: 600 },
    projects_header: { flexDirection: "row", columnGap: 5, marginBottom: 5 },
    projects_link: {
      textDecoration: "none",
      color: colors.primary,
    },
    projects_divider: {
      color: colors.muted,
    },
    projects_desc: {
      marginBottom: 5,
    },
    projects_tools: {
      fontSize: FONT_SIZE.sm,
      color: colors.secondary,
    },

    // Educations ----------------------------------------------------------------------

    edus: { gap: 10 },
    edus_label: { fontWeight: 600, fontSize: FONT_SIZE.lg },
    edus_header: { flexDirection: "row", columnGap: 5 },
    edus_subject: {},
    edus_divider: { color: colors.secondary, fontSize: FONT_SIZE.sm },
    edus_period: { color: colors.secondary, fontSize: FONT_SIZE.sm },
  });
};

const theme = {
  colors: COLORS,
  fontSizes: FONT_SIZE,
};

export default theme;
