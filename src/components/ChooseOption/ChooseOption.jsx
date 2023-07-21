import { petValues } from "../../constants";
import FieldRadio from "../FieldRadio/FieldRadio";

function ChooseOption({ formik }) {
  return (
    <>
      <FieldRadio
        onChange={formik.handleChange}
        text="your pet"
        value={petValues.yourPet}
        checked={formik.values.option}
      />
      <FieldRadio
        onChange={formik.handleChange}
        text="sell"
        value={petValues.sell}
        checked={formik.values.option}
      />
      <FieldRadio
        onChange={formik.handleChange}
        text="lost/found"
        value={petValues.lostFound}
        checked={formik.values.option}
      />
      <FieldRadio
        onChange={formik.handleChange}
        text="in good hands"
        value={petValues.inGoodHands}
        checked={formik.values.option}
      />
    </>
  )
};

export default ChooseOption;