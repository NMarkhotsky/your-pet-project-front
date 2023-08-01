import { useState } from 'react';

import FormPaginationList from '../../components/FormPagination/FormPaginationList';
import FormAddPet from '../../components/FormAddPet/FormAddPet';
import { BackgroundWrapper } from '../../shared/components/BackgroundWrapper/BackgroundWrapper';

import { FormBody, Main, Title } from './AddPetPage.styled';
import { useAddPet } from '../../hooks';
import { petValues } from '../../constants';
import { t } from 'i18next';

function AddPetPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [file, setFile] = useState(null);
  const {
    option,
    moreInfo: { isLoad },
  } = useAddPet();

  const titleText =
    option === petValues.SELL
      ? t('addPet_form_titleText_sell')
      : option === petValues.LOST_FOUND
      ? t('addPet_form_titleText_lostFound')
      : option === petValues.IN_GOOD_HANDS
      ? t('addPet_form_titleText_inGoodHands')
      : t('addPet_form_titleText_default');

  return (
    <>
      <BackgroundWrapper />
      <Main>
        <FormBody value={currentPage} namepage={option}>
          <Title>{titleText}</Title>
          <FormPaginationList currentPage={currentPage} />
          {!isLoad && (
            <FormAddPet
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              setFile={setFile}
              file={file}
            />
          )}
        </FormBody>
      </Main>
    </>
  );
}

export default AddPetPage;
