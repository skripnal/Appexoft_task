import { TextField } from "@mui/material";
import type { FieldInputProps, FormikProps } from "formik";

interface FormikTextFieldProps {
  field: FieldInputProps<any>;
  form: FormikProps<any>;
}

const FormikTextField: React.FC<FormikTextFieldProps> = ({
  field,
  form,
  ...props
}) => {
  const error = form.touched[field.name] && form.errors[field.name];
  return (
    <TextField
      {...field}
      {...props}
      error={!!error}
      helperText={error as string | undefined}
      fullWidth
    />
  );
};

export default FormikTextField;
