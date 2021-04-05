import { GET, POST, PUT, DELETE,POSTUPLOAD } from './api';

const productApi = {
  getUserById: (id, data) => {
    const url = `/users/${id}`;
    return GET({ url });
  },
  signUp: data => {
    const url = `/auth/register`;
    return POST({ url, data });
  },
  logIn: data => {
    const url = `/auth/login`;
    return POST({ url, data });
  },
  uploadpicture: data => {
    const url = `/auth/upload`;
    return POSTUPLOAD({ url, data });
  },
  uploadpost: data => {
    const url = `/post/`;
    return POST({ url, data });
  },
  
  getPostById: (id) => {
    const url = `/post/${id}`;
    return GET({ url });
  },
  getCommentByPostId: (id) => {
    const url = `/comment/${id}`;
    return GET({ url });
  },
  postComment: (data) => {
    const url = `/comment/`;
    return POST({ url,data });
  },
  getListPost: (data) => {
    const url = `/post/`;
    return GET({ url,data });
  },
  getListPostOption: (data) => {
    const url = `/post/option/`;
    return POST({ url,data });
  },
  getListUser: (offset, limit) => {
    const url = `/users?offset=${offset}&limit=${limit}`;
    return GET({ url });
  },
  deleteUser: (id, data) => {
    const url = `/users/${id}`;
    return DELETE({ url });
  },
  updateStatusUser: (id, status) => {
    const url = `/users/${id}/status/${status}`;
    return PUT({ url });
  },
  addUser: data => {
    const url = `/users/`;
    return POST({ url, data });
  },
  getListPayments: (offset, limit) => {
    const url = `/users/payments?offset=${offset}&limit=${limit}`;
    return GET({ url });
  },
  deposit: data => {
    const url = `/users/payments/deposit`;
    return POST({ url, data });
  },
  getPaymenetId: id => {
    const url = `/users/${id}/payments/?offset=0&limit=1000`;
    return GET({ url });
  },
  getListWithDrawal: (offset, limit, status) => {
    const url = `/users/withdrawls?offset=${offset}&limit=${limit}&status=${status}`;
    return GET({ url });
  },
  approveWithDrawal: (paymentId, userId) => {
    const url = `/users/${userId}/withdrawls/${paymentId}/approve`;
    return PUT({ url });
  }
};

export default productApi;
