import * as Yup from "yup";

export const validationPersonalDetailsPlus = Yup.object().shape({
  name: Yup
    .string()
    .required("Please enter pet name"),
  birthday: Yup
    .string()
    .required("Please enter date of birth"),
  type: Yup
    .string()
    .required("Please enter breed"),
  title: Yup
    .string()
    .required("Please enter title"),
});
