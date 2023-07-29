import { useState } from 'react';

import FormPaginationList from '../../components/FormPagination/FormPaginationList';
import FormAddPet from '../../components/FormAddPet/FormAddPet';
import { BackgroundWrapper } from '../../shared/components/BackgroundWrapper/BackgroundWrapper';

import { FormBody, Main, Title } from './AddPetPage.styled';

function AddPetPage() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
      <Main>
        <BackgroundWrapper />
        <FormBody>
          <Title>Add pet</Title>
          <FormPaginationList currentPage={currentPage} />
          <FormAddPet
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </FormBody>
      </Main>
    </>
  );
}

export default AddPetPage;
