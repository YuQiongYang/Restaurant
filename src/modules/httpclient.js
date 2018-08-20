import axios from 'axios'
const baseUrl = 'http://10.3.138.222:1000/'
let filterUrl = (_url) => {
  if (_url && _url.startsWith('http')) {
    return _url;
  }
  return baseUrl + _url;
}


export default {
  get(_url, _params = {}) {
    return new Promise((resolve, reject) => {
      axios({
        url: filterUrl(_url),
        method: 'get',
        _params
      }).then((res) => {
        resolve(res.data);
      }).catch((error) => {
        reject(error);
      })
    })
  },
  post(_url, _params = {}) {

    return new Promise((resolve, reject) => {
      axios({
        url: filterUrl(_url),
        method: 'post',
        _params,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        transformRequest: [function (data) {
          let ret = ''
          for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }],
      }).then((res) => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
