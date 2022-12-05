import { useField } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

interface Props {
  label?: string;
  name: string;
  type: string;
  helperText?: string;
  disabled?: boolean;
  placeholder?: string;
  isRequired?: boolean;
  variant?: "filled" | "search";
  RightElementChildren?: React.ReactNode;
}

export default function InputField({
  label,
  helperText,
  RightElementChildren,
  ...props
}: Props) {
  const [field, meta] = useField(props);

  return (
    <FormControl
      isInvalid={Boolean(meta.touched && meta.error)}
      isDisabled={props.disabled}
      isRequired={props.isRequired}
    >
      <FormLabel color={"primary.300"}>{label}</FormLabel>
      <InputGroup>
        <Input {...field} {...props} />
        {RightElementChildren ? (
          <InputRightElement children={RightElementChildren} />
        ) : null}
      </InputGroup>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
      {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
    </FormControl>
  );
}
