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
  body: {
    py: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    w: "100%",
    h: { base: "90px", sm: "110px", md: "140px" },
    pb: 0,
  },
  footer: {
    pt: 0,
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
