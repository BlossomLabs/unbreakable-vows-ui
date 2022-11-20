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

export default Text;
