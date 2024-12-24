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
      backgroundColor: "#FFFFFF",
      fontFamily: "Open Sans",
    },
    sidebar: {
      width: "33%",
      flexShrink: 0,
      backgroundColor: "#1B4D3E",
      padding: 20,
      color: "white",
    },
    main: {
      flex: 1,
      padding: 20,
      color: "black",
    },

    // Section ----------------------------------------------------------------------
    section_title: {
      fontSize: 16,
      fontWeight: 600,
      marginBottom: 10,
      marginTop: 20,
    },
    section_text: {
      fontSize: 12,
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
      fontSize: 20,
      fontWeight: 700,
      marginBottom: 2,
      color: "white",
      textAlign: "center",
    },
    profession: {
      fontSize: 14,
      color: "#E0E0E0",
      marginBottom: 20,
      textAlign: "center",
    },
    bio: {
      color: "#444444",
    },

    // Contact ----------------------------------------------------------------------
    contact_label: {
      fontSize: 12,
      color: "#a0a0a0",
      marginBottom: 2,
      fontWeight: 500,
    },
    contact_text: {
      fontSize: 12,
      color: "white",
      marginBottom: 10,
      textDecoration: "none",
    },

    // Social ----------------------------------------------------------------------
    social_link: {
      fontSize: 12,
      color: "white",
      marginBottom: 10,
      textDecoration: "none",
    },

    // Skill ----------------------------------------------------------------------
    skill_label: {
      fontSize: 12,
      color: "white",
      marginBottom: 7,
    },
    skill_bar: {
      height: 4,
      backgroundColor: "#a0a0a0",
      marginBottom: 10,
    },
    skill_fill: {
      height: "100%",
      backgroundColor: "white",
    },

    // Item ----------------------------------------------------------------------
    item: {},
    item_title: {
      fontSize: 14,
      fontWeight: 500,
      marginBottom: 3,
    },
    item_subtitle: {
      fontSize: 12,
      marginBottom: 2,
      color: "#666666",
    },
    item_details: {
      fontSize: 12,
      marginBottom: 5,
      color: "#666666",
    },
    item_tags: {
      fontSize: 10,
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
      fontSize: 11,
      color: "#1B4D3E",
      textDecoration: "none",
      borderRadius: 2,
    },
    item_action_divider: {
      fontSize: 11,
    },
  });
};

const theme = {
  colors: COLORS,
  fontSizes: FONT_SIZE,
};

export default theme;
