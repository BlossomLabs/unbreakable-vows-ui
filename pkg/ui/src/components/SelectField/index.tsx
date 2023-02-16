import { CSSProperties } from "react";
import { useField } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Checkbox,
} from "@chakra-ui/react";
import Select, { OptionProps } from "react-select";
import styles from "./styles";

type Option = {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
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
        ? setValue(newOptions.slice(1))
        : setValue(selected);
    }

    setValue(selected);
  }

  function handleIsChecked(optionValue: string | number) {
    if (isMulti && field.value && field.value.length) {
      const correspondingValue = field.value.find(
        ({ value: fieldValue }: any) => fieldValue === optionValue
      );
      return Boolean(correspondingValue);
    }

    return field.value && field.value.value === optionValue;
  }

  const CustomOption = (props: OptionProps<Option>) => {
    const {
      getStyles,
      isDisabled,
      children,
      innerProps: { ref, ...restInnerProps },
      data: { value, icon },
    } = props as OptionProps<Option>;

    return !isDisabled ? (
      <div
        {...restInnerProps}
        ref={ref}
        style={{
          ...(getStyles("option", props) as CSSProperties),
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        {value === "all" ? null : (
          <Checkbox
            isChecked={handleIsChecked(value)}
            colorScheme={"checkbox"}
          />
        )}
        {icon ? <>{icon}</> : null}
        {children}
      </div>
    ) : null;
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
        styles={styles}
        components={{ Option: CustomOption }}
        hideSelectedOptions={false}
      />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
      {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
    </FormControl>
  );
}
