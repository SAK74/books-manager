import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';

const defauldtConfig: AxiosRequestConfig = {
   baseURL: "https://gnikdroy.pythonanywhere.com/api/",
   url: "book/",
   paramsSerializer: (params) => qs.stringify(params, { arrayFormat: "brackets" })
}
const fetch = <T>(page?: number): Promise<T> => {
   defauldtConfig.params = page ? { page } : null;
   console.log("params: ", defauldtConfig.params);
   return axios(defauldtConfig)
      .then(resp => {
         console.log("response: ", resp);
         return resp.data.results;
      })
      .catch(err => console.log("Error: ", err));
}

export default { fetch };