/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { petValues } from "../../constants";
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import PersonalDetailsPlus from "../PersonalDetailsPlus/PersonalDetailsPlus";
import { setPersonalDetails } from "../../redux/add-pet/personalDetailsSlice";

function PetInfo({ option, handleDefinePage }) {

  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(setPersonalDetails(values));
    handleDefinePage(1);
  }

  return (
    <>
      {
        option === petValues.yourPet
          ? <PersonalDetails onSubmit={onSubmit} handleDefinePage={handleDefinePage} />
          : <PersonalDetailsPlus onSubmit={onSubmit} handleDefinePage={handleDefinePage} />
      }
    </>
  )
}

export default PetInfo;