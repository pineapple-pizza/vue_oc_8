"use strict";

// import Vue from 'vue';
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = 'https://oc-django-api.herokuapp.com/'
// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// let config = {
// //   baseURL: process.env.VUE_APP_BASE_URL,
// //   timeout: 60 * 1000, // Timeout
// //   // withCredentials: true, // Check cross-site Access-Control
// };

// const _axios = axios.create(config);

// _axios.interceptors.request.use(
//   function(config) {
//     // Do something before request is sent
//     return config;
//   },
//   function(error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor
// _axios.interceptors.response.use(
//   function(response) {
//     // Do something with response data
//     return response;
//   },
//   function(error) {
//     // Do something with response error
//     return Promise.reject(error);
//   }
// );

// Vue.use(_axios)

// export default _axios;


export default axios.create({
  baseURL : 'https://django-api-2.herokuapp.com/',
})


// export const http = axios.create({
//     baseURL: `https://oc-django-api.herokuapp.com/`,
//     headers: {
//       Authorization: 'Bearer ' + localStorage.getItem('token')
//     }
//   })