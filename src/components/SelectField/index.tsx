import { useField } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import Select, { StylesConfig } from "react-select";
// import { ChevronDownIcon } from "../Icons";
import chakraTheme from "../../theme/customTheme";

type Option = {
  value: string | number;
  label: string;
};

interface Props {
  name: string;
  options: Option[];
  placeholder?: string;
  label?: string;
  helperText?: string;
  isMulti?: boolean;
  disabled?: boolean;
  isRequired?: boolean;
}

export default function SelectField({
  helperText,
  label,
  options,
  disabled,
  isRequired,
  isMulti,
  name,
  placeholder,
}: Props) {
  const [field, meta, { setValue }] = useField({
    name,
  });

  const newOptions = isMulti
    ? [{ label: "Select All", value: "all" }, ...options]
    : options;

  function handleChange(selected: any) {
    if (isMulti) {
      const selectedAllOption = selected.find(
        (option: Option) => option.value === "all"
      );
      return selectedAllOption
        ? setValue(options.slice(1))
        : setValue(selected);
    }

    setValue(selected);
  }

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
  };

  return (
    <FormControl
      isInvalid={Boolean(meta.touched && meta.error)}
      isDisabled={disabled}
      isRequired={isRequired}
    >
      <FormLabel color={"primary.300"}>{label}</FormLabel>
      <Select
        {...field}
        options={newOptions}
        placeholder={placeholder}
        onChange={handleChange}
        isMulti={isMulti}
        styles={colourStyles}
      />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
      {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
    </FormControl>
  );
}
