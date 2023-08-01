/* eslint-disable react/prop-types */
import File from '../File/File';
import Comments from '../Comment/Comment';
import { ButtonsWrapper } from '../ChoiseOption/ChoiseOption.styled';
import { ButtonNext, ButtonPrev } from '../StyledButtons/StyledButtons';
import { FormYourPetMoreInfo } from './YourPetMoreInfo.styled';
import { Icon } from '../Icon/Icon';
import { t } from 'i18next';

function YourPetMoreInfo({ formik, handleDefinePage, setFile, file }) {
  return (
    <>
      <FormYourPetMoreInfo onSubmit={formik.handleSubmit}>
        <File
          setFile={setFile}
          file={file}
          formik={formik}
          text={t('addPet_form_moreInfo_file')}
          direction="row"
          items="center"
          gap="14px"
        />
        <Comments formik={formik} />
        <ButtonsWrapper>
          <ButtonNext disabled={formik.values.option === ''} type="submit">
            {t('other_done')}
            <Icon iconName="icon-pawprint" fill="#FFFFFF" />
          </ButtonNext>
          <ButtonPrev type="button" onClick={() => handleDefinePage(-1)}>
            <Icon iconName="icon-arrow-left" stroke="#54adff" />
            {t('other_back')}
          </ButtonPrev>
        </ButtonsWrapper>
      </FormYourPetMoreInfo>
    </>
  );
}

export default YourPetMoreInfo;
