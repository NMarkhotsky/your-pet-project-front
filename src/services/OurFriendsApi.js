import axios from 'axios';
import { BASE_URL } from '../constants/globalConstants';

axios.defaults.baseURL = BASE_URL;

export const getOurFriends = async () => {
  try {
    const {
      data: { friends },
    } = await axios.get('/friends');

    return friends;
  } catch (error) {
    console.log(error);
  }
};
