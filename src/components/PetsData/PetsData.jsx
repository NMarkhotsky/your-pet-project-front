import axios from 'axios';
// import { useEffect, useState } from 'react';
import { PetsList } from '../PetsList/PetsList';

axios.defaults.baseURL = 'https://mypets-backend.onrender.com/api/';

export const PetsData = () => {
//   const [petsList, setPetsList] = useState([]);

//   const getPetsList = async () => {
//     try {
//       const response = await axios(`/pets`);
//       const pets = await response.data;
//       console.log('pets ===>', pets);
//       // setPetsList(pets);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const deletePet = async petid => {
//     //   const response = await axios.delete(`/pets/:petid`);
//     const response = await axios.delete(`/pets/${petid}`);
//     return response.data;
//   };

//   useEffect(() => {
//     if (petsList === []) {
//       return;
//     }
//   }, [petsList]);

//   useEffect(() => {
//     getPetsList();
//   }, []);

//   useEffect(() => {
//     deletePet();
//   }, []);

  return (
    <>
      {/* <PetsList petsList={petsList} /> */}
      <PetsList />
    </>
  );
};
