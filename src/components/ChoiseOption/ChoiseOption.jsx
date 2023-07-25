/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { setOption } from "../../redux/add-pet/optionSlice";

import ChooseOption from "../ChooseOption/ChooseOption";

import { ChooseOptionWrapper, MyForm, ButtonsWrapper } from "./ChoiseOption.styled";
import { ButtonNext, ButtonPrev } from "../StyledButtons/StyledButtons";
import { BackIcon, PawIcon } from "../../icons";

const initialValues = {
  option: "",
}

function ChoiseOption({ handleDefinePage, currentPage }) {

  const dispatch = useDispatch();

  const onSubmit = (values) => {
    if (currentPage === 0) {
      dispatch(setOption(values.option));
    }
    handleDefinePage(1);
  }

  const formik = useFormik({ initialValues, onSubmit });

  return (
    <MyForm onSubmit={formik.handleSubmit}>
      <ChooseOptionWrapper>
        <ChooseOption formik={formik} />
      </ChooseOptionWrapper>
      <ButtonsWrapper>
        <ButtonNext disabled={formik.values.option === ""} type="submit">
          Next
          <PawIcon />
        </ButtonNext>
        <ButtonPrev type="button">
          <BackIcon />
          Cancel
        </ButtonPrev>
      </ButtonsWrapper>
    </MyForm>
  )
}

export default ChoiseOption;