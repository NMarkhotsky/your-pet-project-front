import * as Yup from "yup";
import { basicValidationMoreInfo } from "../../constants";

const MAX_LENGTH_LOCATION = 20;

export const validationDefaultInfo = Yup.object().shape({
  gender: Yup
    .string()
    .oneOf(["male", "female"], "Invalid gender")
    .required("Please select a gender"),
  location: Yup
    .string()
    .max(MAX_LENGTH_LOCATION, `Maximum location length - ${MAX_LENGTH_LOCATION} characters`)
    .required("Location is required"),
  ...basicValidationMoreInfo,
});
