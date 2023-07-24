import axios from 'axios';
import { UserForm } from '../UserForm/UserForm';
import { useEffect, useState } from 'react';

axios.defaults.baseURL = 'https://mypets-backend.onrender.com/api/';

export const UserData = () => {
  const [user, setUser] = useState(null);

  //   useEffect(() => {
  // fetchGetCurrentUser()
  //   }, [fetchGetCurrentUser]);
  //   const fetchGetCurrentUser = async () => {
  //     const response = await axios.get(`/users`);
  //     console.log(response.data);
  //     setUser(response.data);
  //     return response.data;
  //   };

  //   fetchGetCurrentUser();

  const getCurrentUser = async () => {
    const response = await axios(`/users`);
    const { user } = await response.data;
    setUser(user);
    console.log('userResData --->', user);
    console.log('userResData --->', typeof user);
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  console.log('userState --->', user);

  return (
    <>
      <UserForm user={user} />
    </>
  );
};
