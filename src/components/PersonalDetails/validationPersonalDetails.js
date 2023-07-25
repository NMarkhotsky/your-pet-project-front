import * as Yup from "yup";

export const validationPersonalDetails = Yup.object().shape({
  name: Yup
    .string()
    .required("Please enter pat name"),
  birthday: Yup
    .string()
    .required("Please enter date of birth"),
  type: Yup
    .string()
    .required("Please enter breed"),
});
