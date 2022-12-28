import axios from 'axios';
//const axios = require('axios'); // legacy way
axios.defaults.baseURL = 'http://localhost:5005/api';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('token');

// Important: If axios is used with multiple domains, the AUTH_TOKEN will be sent to all of them.
// See below for an example using Custom instance defaults instead.
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// Make a request for a user with a given ID
// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });

// // Optionally the request above could also be done as
// axios.get('/user', {
//   params: {
//     ID: 12345
//   }
// })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });

// // Want to use async/await? Add the `async` keyword to your outer function/method.
// async function getUser() {
//   try {
//     const response = await axios.get('/user?ID=12345');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }
const getProducts = () => axios.get('/products')
// function getProducts(){
//   return axios.get('/products');
// }
class Request {
    constructor() {
        this.request = axios.create({
            baseURL: 'http://localhost:5005/api',
            headers: {
                Authorization: 'Bearer ' + window.localStorage.getItem('token')
            }
        })

        this.request.interceptors.response.use(res => res, (err) => {
            if (this.ErrorHandler) this.ErrorHandler(err)
            throw err
        })
    }

    setErrorHandler(cb) {
        this.ErrorHandler = cb
    }

    changeToken(token) {
        if (token) {
            this.request.defaults.headers.Authorization = 'Bearer ' + token;
        } else {
            this.request.defaults.headers.Authorization = '';
        }
    }

    get(...params) {
        return this.request.get(...params)
    }

    post(...params) {
        return this.request.post(...params)
    }

    put(...params) {
        return this.request.put(...params)
    }

    delete(...params) {
        return this.request.delete(...params)
    }
}
export default new Request()