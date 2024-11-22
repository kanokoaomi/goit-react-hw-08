import * as Yup from "yup";

const phoneNumberRegex =
  /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

export const contactsValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short! It must be at least 3 symbols")
    .max(25, "Too long! It must be less then 25 symbols")
    .required("Required field"),
  number: Yup.string()
    .min(3, "Too short!")
    .max(20, "Too long!")
    .required("Required field")
    .matches(phoneNumberRegex, "Number must be in format: + XXX XXX XX XX"),
});

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 symbols")
    // .max(15, "Password must be the most 15 symbols")
    .required("Required"),
});

export const registrationValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short! It must be at least 3 symbols")
    .max(25, "Too long! It must be less then 25 symbols")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 symbols")
    // .max(15, "Password must be the most 15 symbols")
    .required("Required"),
});
