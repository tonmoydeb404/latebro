import { fonts } from "@/lib/react-pdf/fonts";
import {
  EditorColors,
  EditorFontFamily,
  EditorFontSizes,
} from "@/types/editor";
import { Template } from "@/types/template";
import { StyleSheet } from "@react-pdf/renderer";

const FONT_FAMILY: EditorFontFamily = "inter";

const FONT_SIZES: EditorFontSizes = {
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
  primary_foreground: "#fff",
};

export const createStyles = (
  themeColors?: EditorColors,
  themeFontSizes?: EditorFontSizes,
  themeFontFamily?: EditorFontFamily
) => {
  const colors = { ...COLORS, ...themeColors };
  const fontSizes = { ...FONT_SIZES, ...themeFontSizes };
  const fontFamily = fonts[themeFontFamily || FONT_FAMILY];

  return StyleSheet.create({
    page: {
      padding: 40,
      backgroundColor: colors.background,
      fontFamily: fontFamily,
      fontWeight: "normal",
      color: colors.foreground,
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
      justifyContent: "space-between",
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
      fontSize: fontSizes.xl,
      fontWeight: 600,
      marginBottom: 4,
    },
    subtitle: {
      fontSize: fontSizes.lg,
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
      fontSize: fontSizes.md,
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
      fontSize: fontSizes.lg,
    },
    project_links: { marginLeft: "auto", flexDirection: "row" },
    project_link: {
      fontSize: fontSizes.sm,
      textDecoration: "none",
      color: colors.primary,
    },
    project_divider: {
      fontSize: fontSizes.sm,
      marginLeft: 5,
      marginRight: 5,
      color: colors.muted,
    },
    project_desc: { fontSize: fontSizes.md, marginBottom: 8 },
    project_tools: {
      color: colors.secondary,
      fontSize: fontSizes.xs,
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
      fontSize: fontSizes.md,
      marginBottom: 2,
    },
    exp_date: {
      fontSize: fontSizes.sm,
      color: colors.secondary,
    },
    exp_desc_point: {
      fontSize: fontSizes.md,
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
    educations_body: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
    },
    educations_subject: {
      fontSize: fontSizes.md,
    },
    educations_date: {
      fontSize: fontSizes.xs,
      color: colors.secondary,
    },
    // Contacts ----------------------------------------------------------------------
    contact_item: {
      marginBottom: 8,
    },
    contact_label: {
      fontSize: fontSizes.sm,
      color: colors.secondary,
      marginBottom: 3,
    },
    contact_text: {
      fontSize: fontSizes.md,
      color: colors.foreground,
      textDecoration: "none",
    },

    // Socials ----------------------------------------------------------------------
    socials: {
      rowGap: 6,
    },
    socials_item: {
      fontSize: fontSizes.md,
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
      fontSize: fontSizes.md,
    },
    language_experience: {
      fontSize: fontSizes.sm,
      textTransform: "uppercase",
      color: colors.secondary,
    },

    // Skills ----------------------------------------------------------------------
    skills: {
      rowGap: 15,
    },
    skill_title: {
      fontSize: fontSizes.sm,
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

export const theme: Template["theme"] = {
  colors: COLORS,
  fontSizes: FONT_SIZES,
  fontFamily: FONT_FAMILY,
};
