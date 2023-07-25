import { useSelector } from "react-redux";
import { selectOption, selectPersonalDetails } from "../../redux/add-pet";

export const useAddPet = () => ({
  option: useSelector(selectOption),
  personalDetails: useSelector(selectPersonalDetails),
});
