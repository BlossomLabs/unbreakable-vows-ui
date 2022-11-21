import { defineStyleConfig, defineStyle } from "@chakra-ui/react";

const xl = defineStyle({
  fontSize: "sm",
  height: "2.75rem",
  minWidth: "11rem",
});

const lg = defineStyle({
  fontSize: "sm",
  height: "2.313rem",
  width: "7.25rem",
});

const md = defineStyle({
  fontSize: "md",
  lineHeight: "1.188rem",
});

const sm = defineStyle({
  width: "100%",
  fontSize: "xs",
  lineHeight: "1.059rem",
});

const Button = defineStyleConfig({
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    p: "1.125rem 1rem 1rem",
    borderRadius: "button",
    color: "secondary.700",
    fontWeight: "medium",
    textAlign: "center",
    lineHeight: "none",
    letterSpacing: "normal",
    animationTimingFunction: "ease-out",
    animationDuration: "300ms",
    _disabled: {
      bgColor: "primary.300",
      color: "secondary.700",
      opacity: 0.4,
      boxShadow: "0px 0px 20px rgba(209, 197, 171, 0.14)",
      _hover: {
        bgColor: "primary.300 !important",
      },
    },
  },
  variants: {
    outline: {
      border: "1px solid",
      borderColor: "primary.300",
      color: "primary.300",
      bgColor: "transparent",
      boxShadow: "none",
      _hover: {
        bgColor: "primary.300",
        color: "secondary.700",
        boxShadow: "0px 0px 20px rgba(209, 197, 171, 0.14)",
      },
    },
    solid: {
      bgColor: "primary.300",
      boxShadow: "0px 0px 20px rgba(209, 197, 171, 0.14)",
      _hover: {
        bgColor: "primary.300",
        boxShadow: "0px 2px 20px 0px rgba(252, 218, 130, 1)",
      },
    },
    link: {
      color: "primary.300",
      bgColor: "transparent",
      boxShadow: "none",
      _hover: {
        textDecoration: "none",
      },
    },
  },
  sizes: { sm, md, lg, xl },
  defaultProps: {
    size: "xl",
  },
});

export default Button;
