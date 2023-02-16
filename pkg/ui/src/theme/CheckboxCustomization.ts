import { checkboxAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

// default base style from the Checkbox theme
const baseStyle = definePartsStyle({
  icon: {
    color: "secondary.700",
  },
});

const checkboxTheme = defineMultiStyleConfig({
  baseStyle,
});

export default checkboxTheme;
