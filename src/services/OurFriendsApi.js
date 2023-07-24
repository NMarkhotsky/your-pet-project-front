import axios from 'axios';

axios.defaults.baseURL = 'https://mypets-backend.onrender.com/api/friends';

export const getOurFriends = async () => {
  try {
    const {
      data: { friends },
    } = await axios.get();

    return friends;
  } catch (error) {
    console.log(error);
  }
};
