import { fonts } from "@/lib/react-pdf/fonts";
import {
  EditorColors,
  EditorFontFamily,
  EditorFontSizes,
} from "@/types/editor";
import { Template } from "@/types/template";
import { StyleSheet } from "@react-pdf/renderer";

const FONT_FAMILY: EditorFontFamily = "open_sans";

const FONT_SIZES: EditorFontSizes = {
  xs: 10.5,
  sm: 11,
  md: 12,
  lg: 16,
  xl: 20,
};

const COLORS: EditorColors = {
  foreground: "#333333",
  secondary: "#444444",
  background: "#FFFFFF",
  muted: "#E0E0E0",
  primary: "#1B4D3E",
  primary_foreground: "#FFF",
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
      flexDirection: "row",
      backgroundColor: colors.background,
      fontFamily: fontFamily,
    },
    sidebar: {
      width: "33%",
      flexShrink: 0,
      backgroundColor: colors.primary,
      padding: 20,
      color: colors.primary_foreground,
    },
    main: {
      flex: 1,
      padding: 20,
      color: colors.foreground,
    },

    // Section ----------------------------------------------------------------------
    section_title: {
      fontSize: fontSizes.lg,
      fontWeight: 600,
      marginBottom: 10,
      marginTop: 20,
    },
    section_text: {
      fontSize: fontSizes.md,
      marginBottom: 3,
    },

    // Profile ----------------------------------------------------------------------
    avatar: {
      width: 90,
      height: 90,
      borderRadius: 50,
      alignSelf: "center",
    },
    name: {
      marginTop: 10,
      fontSize: fontSizes.xl,
      fontWeight: 700,
      marginBottom: 2,
      textAlign: "center",
    },
    profession: {
      fontSize: fontSizes.lg,
      color: colors.muted,
      marginBottom: 20,
      textAlign: "center",
    },
    bio: {
      color: colors.secondary,
    },

    // Contact ----------------------------------------------------------------------
    contact_label: {
      fontSize: fontSizes.md,
      marginBottom: 2,
      fontWeight: 500,
    },
    contact_text: {
      fontSize: fontSizes.md,
      color: colors.primary_foreground,
      marginBottom: 10,
      textDecoration: "none",
    },

    // Social ----------------------------------------------------------------------
    social_link: {
      fontSize: fontSizes.md,
      color: colors.primary_foreground,
      marginBottom: 10,
      textDecoration: "none",
    },

    // Skill ----------------------------------------------------------------------
    skill_label: {
      fontSize: fontSizes.md,
      marginBottom: 7,
    },
    skill_bar: {
      height: 4,
      backgroundColor: colors.muted,
      marginBottom: 10,
    },
    skill_fill: {
      height: "100%",
      backgroundColor: colors.primary_foreground,
    },

    // Item ----------------------------------------------------------------------
    item: {},
    item_title: {
      fontSize: fontSizes.lg,
      fontWeight: 500,
      marginBottom: 3,
    },
    item_subtitle: {
      fontSize: fontSizes.md,
      marginBottom: 2,
    },
    item_details: {
      fontSize: fontSizes.md,
      marginBottom: 5,
    },
    item_tags: {
      fontSize: fontSizes.xs,
      marginBottom: 10,
    },
    bullet_point: {
      paddingLeft: 5,
    },
    item_actions: {
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      gap: 5,
      marginBottom: 6,
    },
    item_action: {
      fontSize: fontSizes.md,
      color: colors.primary,
      textDecoration: "none",
      borderRadius: 2,
    },
    item_action_divider: {
      fontSize: fontSizes.sm,
    },
  });
};

const theme: Template["theme"] = {
  colors: COLORS,
  fontSizes: FONT_SIZES,
  fontFamily: FONT_FAMILY,
};

export default theme;
