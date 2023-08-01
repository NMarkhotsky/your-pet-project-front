import { useState } from 'react';

import FormPaginationList from '../../components/FormPagination/FormPaginationList';
import FormAddPet from '../../components/FormAddPet/FormAddPet';
import { BackgroundWrapper } from '../../shared/components/BackgroundWrapper/BackgroundWrapper';

import { FormBody, Main, Title } from './AddPetPage.styled';
import { useAddPet } from '../../hooks';
import { petValues } from '../../constants';

function AddPetPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [file, setFile] = useState(null);
  const {
    option,
    moreInfo: { isLoad },
  } = useAddPet();

  const titleText =
    option === petValues.SELL
      ? 'Add pet for sell'
      : option === petValues.LOST_FOUND
      ? 'Add lost pet'
      : option === petValues.IN_GOOD_HANDS
      ? 'Add pet in good hands'
      : 'Add pet';

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
