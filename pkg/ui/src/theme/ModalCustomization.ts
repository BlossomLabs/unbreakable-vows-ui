import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  dialog: {
    borderRadius: "none",
    bg: "secondary.700",
  },
  header: {
    fontWeight: "medium",
    color: "white",
  },
  body: {
    color: "white",
    fontWeight: "regular",
  },
  footer: {
    p: "1rem 0 0 0",
  },
});

const xl = defineStyle({
  fontSize: "xl",
  lineHeight: 8,
  letterSpacing: "normal",
  p: 0,
});

const md = defineStyle({
  fontSize: "md",
  lineHeight: 8,
  letterSpacing: "normal",
  px: 0,
  pt: 2,
});

const lg = defineStyle({
  width: { base: "85%", md: "lg" },
  p: 6,
});

const sizes = {
  xl: definePartsStyle({ header: xl, body: md, dialog: lg }),
};

const modalTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: "xl",
  },
});

export default modalTheme;
