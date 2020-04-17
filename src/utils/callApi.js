import axios from 'axios';
import { loadingService } from '../rxjs/services';


export function callApi(method, url, body = {}) {
  return new Promise( async (resolve, reject) => {
    loadingService.showLoading();

    let objCall = {
        method: method,
        url: url,
        data: body
    }

    let response = {};

    try {
        response = await axios(objCall);
        resolve(response)
    } catch(error) {

      if(error.request.response && error.request.response.indexOf('<') < 0) {
        const response = JSON.parse(error.request.response);
      }

      reject(error);
    } finally {
      loadingService.hideLoading();
    }
  });
}