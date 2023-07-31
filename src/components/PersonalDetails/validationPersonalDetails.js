import * as Yup from "yup";

export const validationPersonalDetails = Yup.object().shape({
  name: Yup
    .string()
    .required("Please enter pet name"),
  birthday: Yup
    .date()
    .max(new Date(), "Date of birth cannot be in the future")
    .required("Please enter date of birth"),
  type: Yup
    .string()
    .required("Please enter breed"),
});
