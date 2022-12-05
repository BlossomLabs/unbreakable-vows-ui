import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const filled = definePartsStyle({
  field: {
    color: "white",
    borderRadius: "base",
    borderColor: "transparent",
    bgColor: "secondary.600",
    _placeholder: {
      opacity: 0.5,
    },
    _focus: {
      border: "1px solid",
      borderColor: "primary.300",
      bgColor: "secondary.600",
    },
    _hover: {
      bgColor: "secondary.600",
    },
    _disabled: {
      opacity: 0.9,
      color: "rgba(255, 255, 255, 0.12)",
      bgColor: "secondary.600",
    },
  },
});

const inputTheme = defineMultiStyleConfig({
  variants: {
    filled,
  },
  defaultProps: {
    variant: "filled",
  },
});

export default inputTheme;
