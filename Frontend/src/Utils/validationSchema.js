import * as Yup from "yup";

export const contactFormSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  number: Yup.string()
    .matches(/^[0-9]+$/, "Only numbers are allowed")
    .min(10, "Must be at least 10 digits")
    .required("Phone number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string(),
});
