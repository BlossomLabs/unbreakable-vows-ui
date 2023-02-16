import { StylesConfig } from "react-select";
import chakraTheme from "../../theme/customTheme";

type Option = {
  value: string | number;
  label: string;
};

const colourStyles: StylesConfig<Option> = {
  valueContainer: (styles, { isDisabled }) => ({
    ...styles,
    backgroundColor: isDisabled
      ? chakraTheme.colors.secondary["600"]
      : chakraTheme.colors.secondary["800"],
  }),
  menuList: (styles) => ({
    ...styles,
    backgroundColor: chakraTheme.colors.secondary["800"],
  }),
  option: (styles, { isDisabled, isFocused }) => {
    return {
      ...styles,
      color: "white",
      cursor: isDisabled ? "not-allowed" : "default",
      borderBottom: "1px solid",
      borderColor: "rgba(255, 255, 255, 0.15)",
      paddingTop: "12px",
      paddingBottom: "12px",
      backgroundColor: isFocused
        ? chakraTheme.colors.secondary["600"]
        : chakraTheme.colors.secondary["800"],
    };
  },
  placeholder: (styles) => ({ ...styles, opacity: 0.5 }),
  indicatorsContainer: (styles, { isDisabled }) => ({
    ...styles,
    backgroundColor: isDisabled
      ? chakraTheme.colors.secondary["600"]
      : chakraTheme.colors.secondary["800"],
  }),
  dropdownIndicator: (styles, { isFocused }) => ({
    ...styles,
    color: chakraTheme.colors.primary["300"],
    transform: `rotate(${isFocused ? -180 : 0}deg)`,
  }),
  clearIndicator: (styles) => ({
    ...styles,
    color: chakraTheme.colors.primary["300"],
  }),
  singleValue: (styles) => ({
    ...styles,
    color: "white",
  }),
};

export default colourStyles;
