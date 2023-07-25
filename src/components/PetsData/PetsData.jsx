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
    await axios
      .delete(`/pets/${id}`)
      .then(() => {
        setPets(prevPets => prevPets.filter(pet => pet._id !== id));
      })
      .catch(error => {
        console.error('Error deleting pet:', error);
      });
   
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
      <PetsList pets={pets} deletePet={deletePet} />
    </>
  );
};
