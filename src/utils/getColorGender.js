export const getColorGender = ({ value, formik}) =>
  formik.values.gender === value ? "#fff" : "#888888";