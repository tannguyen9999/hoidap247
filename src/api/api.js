import { getCookieFromBrowser } from '../util/cookies';
import axiosClient from './axiosClient';

const getHeaders = () => {
  const token = getCookieFromBrowser("token");
  let Authorization = `Bearer ${token}`;
  return {
    headers: { 
      Authorization,
     }
  };
};

const getHeaderUpLoad = () => {
  const token = getCookieFromBrowser("token");
  let Authorization = `Bearer ${token}`;
  return {
    headers: { Authorization,
      'Content-Type': 'multipart/form-data',
     }
  };
};

export const GET = async ({ url  }) => {
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

export const POSTUPLOAD = ({ url,data = {}  }) => {
  return axiosClient.post(url, data, getHeaderUpLoad());
};

export const PUTUPAVA = ({ url,data = {}  }) => {
  return axiosClient.put(url, data, getHeaderUpLoad());
};
