import FieldRadio from "../FieldRadio/FieldRadio";

function ChooseOption({ formik }) {
  return (
    <>
      <FieldRadio
        onChange={formik.handleChange}
        text="your pet"
        value="your-pet"
        checked={formik.values.option}
      />
      <FieldRadio
        onChange={formik.handleChange}
        text="sell"
        value="sell"
        checked={formik.values.option}
      />
      <FieldRadio
        onChange={formik.handleChange}
        text="lost/found"
        value="lost-found"
        checked={formik.values.option}
      />
      <FieldRadio
        onChange={formik.handleChange}
        text="in good hands"
        value="in-good-hands"
        checked={formik.values.option}
      />
    </>
  )
};

export default ChooseOption;