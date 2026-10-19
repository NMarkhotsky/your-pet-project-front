import { api } from './api';
export const getOurFriends = async (options = {}) => (await api.get('/friends', options)).data.data;
