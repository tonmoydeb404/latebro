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
      fontSize: 12,
      fontFamily: "Open Sans",
      lineHeight: 1.6,
    },
    leftColumn: {
      width: "35%",
    },
    rightColumn: {
      paddingLeft: 25,
      width: "70%",
    },
    header: {
      fontSize: 24,
      fontWeight: 800,
    },
    sectionTitle: {
      fontSize: 14,
      fontWeight: "bold",
      marginBottom: 10,
      textTransform: "uppercase",
    },
    text: {
      fontSize: 12,
      color: "#000",
      textDecoration: "none",
    },
    textTitle: {
      fontSize: 12,
      fontWeight: 600,
    },
    subtle: {
      fontSize: 10,
      opacity: 0.8,
    },
    link: {
      color: "blue",
      textDecoration: "none",
    },
    skillBar: {
      height: 5,
      backgroundColor: "#000",
      marginBottom: 10,
      borderRadius: 2,
    },
  });
};

const theme = {
  colors: COLORS,
  fontSizes: FONT_SIZE,
};

export default theme;
