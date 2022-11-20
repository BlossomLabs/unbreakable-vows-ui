import { defineStyleConfig } from "@chakra-ui/react";

const Heading = defineStyleConfig({
  baseStyle: {
    fontFamily: "heading",
    lineHeight: 0,
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
    },
  },
  sizes: {
    md: {
      fontSize: "18px",
    },
  },
});

export default Heading;
