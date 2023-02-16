import { defineStyleConfig } from "@chakra-ui/react";

const Heading = defineStyleConfig({
  baseStyle: {
    fontFamily: "heading",
    lineHeight: "none",
    color: "white",
  },
  variants: {
    h1: {
      fontWeight: "bold",
    },
    h2: {
      fontWeight: "medium",
    },
    h3: {
      fontWeight: "medium",
      textTransform: "uppercase",
    },
  },
  sizes: {
    "2xs": {
      fontSize: "0.75rem",
    },
    md: {
      fontSize: "1.125rem",
    },
  },
});

export default Heading;
