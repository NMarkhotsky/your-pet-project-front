/* eslint-disable react/prop-types */
import File from "../File/File";
import Comments from "../Comment/Comment";
import { ButtonsWrapper } from "../ChoiseOption/ChoiseOption.styled";
import { ButtonNext, ButtonPrev } from "../StyledButtons/StyledButtons";
import { BackIcon, PawIcon } from "../../icons";
import { FormYourPetMoreInfo } from "./YourPetMoreInfo.styled";

function YourPetMoreInfo({ formik, handleDefinePage, setFile, file }) {

  return (
    <>
      <FormYourPetMoreInfo onSubmit={formik.handleSubmit}>
        <File
          setFile={setFile}
          file={file}
          formik={formik}
          text="Load the pet’s image:"
          direction="row"
          items="center"
          gap="14px"
        />
          <Comments formik={formik} />
          <ButtonsWrapper>
            <ButtonNext disabled={formik.values.option === ""} type="submit">
              Done
              <PawIcon />
            </ButtonNext>
            <ButtonPrev type="button" onClick={() => handleDefinePage(-1)}>
              <BackIcon />
              Back
            </ButtonPrev>
          </ButtonsWrapper>
      </FormYourPetMoreInfo>
    </>
  )
}

export default YourPetMoreInfo;
