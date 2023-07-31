/* eslint-disable react/prop-types */
import { useAddPet } from '../../hooks';

import PetInfo from '../PetInfo/PetInfo';
import MoreInfo from '../MoreInfo/MoreInfo';
import ChoiseOption from '../ChoiseOption/ChoiseOption';

function FormAddPet({ currentPage, setCurrentPage, setFile, file }) {
  const { option } = useAddPet();

  const handleDefinePage = value => {
    if (value === -1 && currentPage === 0) {
      console.log('start');
      return;
    }

    setCurrentPage(prev => prev + value);
  };

  return (
    <>
      {currentPage === 0 && (
        <ChoiseOption
          currentPage={currentPage}
          handleDefinePage={handleDefinePage}
        />
      )}
      {currentPage === 1 && (
        <PetInfo option={option} handleDefinePage={handleDefinePage} />
      )}
      {currentPage === 2 && (
        <MoreInfo
          setFile={setFile}
          file={file}
          option={option}
          handleDefinePage={handleDefinePage}
        />
      )}
    </>
  );
}

export default FormAddPet;
