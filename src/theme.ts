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
      lineHeight: "0.15px",
    },
    tooltip: {
      fontWeight: 500,
      lineHeight: 0,
    },
    subtitle1: {
      fontWeight: 400,
      lineHeight: "0.15px",
    },
    subtitle2: {
      fontWeight: 500,
      lineHeight: "0.15px",
    },
  },
  sizes: {
    xs: {
      fontSize: "10px",
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
};

export default theme;
