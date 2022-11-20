import { defineStyleConfig } from "@chakra-ui/react";

const Text = defineStyleConfig({
  baseStyle: {
    fontFamily: "body",
  },
  variants: {
    body1: {
      fontWeight: 400,
      lineHeight: 0,
    },
    body2: {
      fontWeight: 400,
      lineHeight: "0.009rem",
    },
    tooltip: {
      fontWeight: 500,
      lineHeight: 0,
    },
    subtitle1: {
      fontWeight: 400,
      lineHeight: "0.009rem",
    },
    subtitle2: {
      fontWeight: 500,
      lineHeight: "0.009rem",
    },
  },
  sizes: {
    xs: {
      fontSize: "0.625rem",
    },
    sm: {
      fontSize: "sm",
    },
    md: {
      fontSize: "md",
    },
  },
  defaultProps: {
    variant: "body1",
    size: "md",
  },
});

const Heading = defineStyleConfig({
  baseStyle: {
    fontFamily: "heading",
    lineHeight: 0,
  },
  variants: {
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 500,
    },
    h3: {
      fontWeight: 500,
    },
  },
  sizes: {
    md: {
      fontSize: "18px",
    },
  },
});

const theme = {
  fonts: {
    heading: `"Crimson Pro", serif`,
    body: `"Inter", sans-serif`,
  },
  components: {
    Text,
    Heading,
  },
  sizes: {
    "4xs": "10rem",
  },
  colors: {
    primary: {
      300: "rgba(252, 218, 130, 1)", // gold
      400: "rgba(221, 198, 146, 1)", // gold light
      500: "rgba(198, 161, 91, 1)", // gold dark
    },
    secondary: {
      50: "#F9F9F9", // gris
      400: "rgba(162, 155, 142, 1)", // light beige
      600: "rgba(59, 66, 74, 1)", // gris claro
      700: "rgba(37, 37, 39, 1)", // dark gray
      800: "rgba(4, 2, 16, 1)", // gris claro
      900: "rgba(0, 0, 0, 1)", // black
      red: "rgba(186, 49, 61, 1)",
    },
  },
};

export default theme;
