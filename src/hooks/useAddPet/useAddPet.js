import { useSelector } from "react-redux";
import { selectMoreInfo, selectOption, selectPersonalDetails } from "../../redux/add-pet";

export const useAddPet = () => ({
  option: useSelector(selectOption),
  personalDetails: useSelector(selectPersonalDetails),
  moreInfo: useSelector(selectMoreInfo),
});
