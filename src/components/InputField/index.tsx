import { useField } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

interface Props {
  label?: string;
  name: string;
  type: string;
  helperText?: string;
  disabled?: boolean;
  placeholder?: string;
  isRequired?: boolean;
}

export default function InputField({ label, helperText, ...props }: Props) {
  const [field, meta] = useField(props);

  return (
    <FormControl
      isInvalid={Boolean(meta.touched && meta.error)}
      isDisabled={props.disabled}
      isRequired={props.isRequired}
    >
      <FormLabel color={"primary.300"}>{label}</FormLabel>
      <Input {...field} {...props} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
      {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
    </FormControl>
  );
}
