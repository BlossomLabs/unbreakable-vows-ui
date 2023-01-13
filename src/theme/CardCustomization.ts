import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import bg from "../assets/contract-bg.png";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const contract = definePartsStyle({
  container: {
    backgroundImage: bg,
    height: { base: "min-content", lg: "940px" },
    width: { base: "100%", md: "730px" },
  },
  header: {
    w: "100%",
    h: { base: "90px", sm: "110px", md: "140px" },
  },
  footer: {
    w: "100%",
    h: { base: "90px", sm: "110px", md: "140px" },
  },
});

// export the component theme
const cardTheme = defineMultiStyleConfig({
  variants: {
    contract,
  },
});

export default cardTheme;
