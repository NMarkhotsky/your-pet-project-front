import * as Yup from "yup";
import { basicValidationMoreInfo } from "../../constants";

export const validationYourPet = Yup.object().shape(basicValidationMoreInfo);
