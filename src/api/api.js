import axiosClient from './axiosClient';

const getHeaders = () => {
  const token = "localStorage.getItem('accessToken')";
  let Authorization = `Bearer ${token}`;
  return {
    headers: { Authorization }
  };
};

export const GET = async ({ url }) => {
  return axiosClient.get(url, getHeaders());
};

export const POST = ({ data = {}, url }) => {
  return axiosClient.post(url, data, getHeaders());
};

export const PUT = ({ url, data = {} }) => {
  return axiosClient.put(url, data, getHeaders());
};

export const DELETE = ({ url }) => {
  return axiosClient.delete(url, getHeaders());
};
