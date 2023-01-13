import Heading from "./HeadingCustomization";
import Text from "./TextCustomization";
import Button from "./ButtonCustomization";
import Modal from "./ModalCustomization";
import Input from "./InputCustomization";
import Checkbox from "./CheckboxCustomization";
import Card from "./CardCustomization";

const theme = {
  fonts: {
    heading: `"Crimson Pro", serif`,
    body: `"Inter", sans-serif`,
  },
  components: {
    Text,
    Heading,
    Button,
    Modal,
    Input,
    Checkbox,
    Card,
  },
  textStyles: {
    subtitle1: {
      fontWeight: "regular",
      fontSize: "lg",
      color: "white",
    },
    subtitle2: {
      fontWeight: "medium",
      fontSize: "sm",
      color: "primary.300",
      fontHeight: "120%",
    },
    body1: {
      fontWeight: "regular",
      fontSize: "md",
      color: "white",
    },
    body2: {
      fontWeight: "regular",
      fontSize: "sm",
      letterSpacing: "0",
      lineHeight: "143%",
      color: "white",
    },
    tooltip: {
      fontWeight: "medium",
      fontSize: "0.625rem",
      color: "white",
    },
  },
  sizes: {
    "4xs": "10rem",
  },
  colors: {
    checkbox: {
      500: "rgba(252, 218, 130, 1)",
    },
    primary: {
      300: "rgba(252, 218, 130, 1)", // gold
      400: "rgba(221, 198, 146, 1)", // gold light
      500: "rgba(198, 161, 91, 1)", // gold dark
    },
    secondary: {
      50: "#F9F9F9", // gris
      400: "rgba(162, 155, 142, 1)", // light beige
      500: "rgba(57, 40, 33, 1)", // brown
      600: "rgba(59, 66, 74, 1)", // gris claro
      700: "rgba(37, 37, 39, 1)", // dark gray
      800: "rgba(4, 2, 16, 1)", // gris claro
      900: "rgba(0, 0, 0, 1)", // black
      red: "rgba(186, 49, 61, 1)",
    },
  },
  radii: {
    button: "5.625rem",
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
};

export default theme;
