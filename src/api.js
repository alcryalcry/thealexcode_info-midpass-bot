import axios from 'axios'
import { API_KEY, API_ROUTE_USERS } from './constants.js';

export const axiosInstance = axios.create({
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  },
});

export const getUsers = async () => {
  try {
    const res = (await axiosInstance.get(`${API_ROUTE_USERS}?populate[codes][populate][internalStatus]=*&populate[codes][populate][passportStatus]=*`)).data
    return res;
  } catch(e) {
    console.error('ERROR at api.getUsers', e.response.data);
    return [];
  }
}

export const createUser = async (user = {}) => {
  try {
    const res = (await axiosInstance.post(API_ROUTE_USERS, user)).data;
    return res;
  } catch(e) {
    console.error('ERROR at api.createUser', e.response.data);
    throw e;
  }
}

export const updateUser = async (user = {}) => {
  try {
    const res = (await axiosInstance.put(`${API_ROUTE_USERS}/${user.id}`, user)).data;
    return res;
  } catch(e) {
    console.error('ERROR at api.updateUser', e.response.data);
    throw e;
  }
}