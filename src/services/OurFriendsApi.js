import axios from 'axios';
import { BASE_URL } from '../constants/globalConstants';

axios.defaults.baseURL = BASE_URL;

export const getOurFriends = async () => {
  try {
    const {
      data: { data },
    } = await axios.get('/friends');

    return data;
  } catch (error) {
    console.log(error);
  }
};
