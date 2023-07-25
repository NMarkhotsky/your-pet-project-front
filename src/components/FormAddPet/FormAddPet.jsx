/* eslint-disable react/prop-types */
import { useAddPet } from "../../hooks";

import PetInfo from "../PetInfo/PetInfo";
import MoreInfo from "../MoreInfo/MoreInfo";
import ChoiseOption from "../ChoiseOption/ChoiseOption";

function FormAddPet({ currentPage, setCurrentPage }) {
  const { option } = useAddPet();

  const handleDefinePage = (value) => {
    if (value === -1 && currentPage === 0) {
      console.log("start");
      return;
    };

    setCurrentPage(prev => prev + value);
  }

  const pages = [
    <ChoiseOption currentPage={currentPage} handleDefinePage={handleDefinePage} />,
    <PetInfo option={option} handleDefinePage={handleDefinePage} />,
    <MoreInfo option={option} handleDefinePage={handleDefinePage} />,
  ];

  return ( <> { pages[currentPage] } </> )
}

export default FormAddPet;