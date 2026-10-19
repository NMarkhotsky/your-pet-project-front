import { api } from './api';
const list = async (path, params = {}, options = {}) => {
  const { data } = await api.get(path, { ...options, params });
  return data;
};
export const getAllNotices = (params, options) => list('/notices', params, options);
export const getSelfNotices = (params, options) => list('/notices/self', params, options);
export const getFavoriteNotices = (params, options) => list('/notices/favorites', params, options);
export const getNoticeById = (id, options) => api.get(`/notices/${id}`, options);
export const addNotice = data => api.post('/notices', data);
export const deleteNotice = id => api.delete(`/notices/${id}`);
export const updateNotice = id => api.patch(`/notices/favorites/${id}`);
