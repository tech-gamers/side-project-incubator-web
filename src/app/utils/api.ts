import axios from 'axios';

const BASE_URL = 'https://api.tech-gamers.live/';

export const api = {
  get(url: string) {
    return axios.get(`${BASE_URL}${url}`);
  },
  post(url: string) {
    return axios.post(`${BASE_URL}${url}`);
  },
  put(url: string) {
    return axios.put(`${BASE_URL}${url}`);
  },
  delete(url: string) {
    return axios.delete(`${BASE_URL}${url}`);
  }
};
