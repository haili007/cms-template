import axios from 'axios'
axios.defaults.timeout = 5000;
import router from '@/router/';

const parseParam = function(param) {
  let paramStr = "";
  if ( typeof param == "object" ) {
    for(let key in param){
      let values="";
      try {
         values=encodeURI(encodeURI(param[key]))
      } catch (error) {
         values=param[key]
      }
      paramStr += "&" + key + "=" + values;
    }
  }
  return paramStr.substr(1);
};
//import ajax from 'ajax'
axios.defaults.headers.post['Content-Type'] = 'application/x-www=form-urlencoded'
export default {
  fetchGet (url, params = {}) {
    params=parseParam(params);
    return new Promise((resolve, reject) => {
      axios.get(url+'?'+params, params).then(res => {
        if(res.data.code=='104'){
          router.replace("/login")
        }
        resolve(res.data)
      }).catch(error => {
        resolve({code:-999,msg:'系统异常'})
      })
    })
  },
  fetchPost (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios({
        url: url,
        method: 'post',
        data: params,
        transformRequest: [function (data) {
          // Do whatever you want to transform the data
          let ret = ''
          for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }],
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(res => {
        if(res.data.code=='104'){
          router.replace("/login")
        }
        resolve(res.data)
      }).catch(error => {
        resolve({code:-999,msg:'系统异常'})
      })
    })
  }
}
