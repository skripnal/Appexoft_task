import * as Yup from "yup";

export interface AccountFormValues {
  username: string;
  followers: number;
  engagement: number;
  recentPost?: string;
}

export const accountValidationSchema: Yup.Schema<AccountFormValues> =
  Yup.object({
    username: Yup.string()
      .required("Required field*")
      .min(3, "Minimum length is 3 characters*")
      .max(20, "Maximum length is 20 characters*"),
    followers: Yup.number()
      .typeError("Must be a number*")
      .required("Required field*")
      .min(0, "Must be at least 0*")
      .max(9999999999, "Must be at most 9999999999*"),
    engagement: Yup.number()
      .typeError("Must be a number*")
      .required("Required field*")
      .min(0, "Must be at least 0*")
      .max(100, "Must be at most 100*"),
    recentPost: Yup.string()
      .max(150, "Maximum length is 150 characters*")
      .default(""),
  });
