import { useField } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import Select from "react-select";
// import { ChevronDownIcon } from "../Icons";

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
      />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
      {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
    </FormControl>
  );
}
