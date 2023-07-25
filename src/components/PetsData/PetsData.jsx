import axios from 'axios';
import { useEffect, useState } from 'react';
import { PetsList } from '../PetsList/PetsList';

axios.defaults.baseURL = 'https://mypets-backend.onrender.com/api/';

export const PetsData = () => {
  const [pets, setPets] = useState([]);

  const getPetsList = async () => {
    try {
      const { data } = await axios.get(`/pets`);
      setPets(data.pets);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deletePet = async (id) => {
    //   const response = await axios.delete(`/pets/:petid`);
    const response = await axios.delete(`/pets/${id}`);
    return response.data;
  };

   useEffect(() => {
     deletePet();
   }, []);

  const onDeleteCardPet = ({id}) => {
    setPets(prevState => prevState.filter(pet => pet.id !== id));
  };

  useEffect(() => {
    if (!pets) {
      return;
    }
  }, [pets]);

  useEffect(() => {
    getPetsList();
  }, []);

 

  return (
    <>
      <PetsList pets={pets} onDeleteCardPet={onDeleteCardPet} />
    </>
  );
};
