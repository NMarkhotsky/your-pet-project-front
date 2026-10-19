import { api, authHeader } from './api';

export const registerUser = async credentials => {
  const { data } = await api.post('/auth/register', credentials);
  authHeader.set(data.token);

  return data;
};

export const loginUser = async credentials => {
  const { data } = await api.post('/auth/login', credentials);
  authHeader.set(data.token);

  return data;
};

export const logoutUser = async () => {
  const { data } = await api.post('/auth/logout');
  authHeader.unset();

  return data;
};

export const fetchUserByToken = async persistedToken => {
  authHeader.set(persistedToken);
  try {
    const { data: { user } } = await api.get('/users');
    return user;
  } catch (error) {
    if (error.response?.status === 401) authHeader.unset();
    throw error;
  }
};
