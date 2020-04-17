import { callApi } from "../utils/callApi";

export function fetchPublications() {
  return function(dispatch) {
    return callApi('GET', 'http://www.mocky.io/v2/5be5e3fa2f000082000fc3f8')
    .then( res => {
      return dispatch({
        type: 'FETCH_PUBLICATIONS',
        data: res.data
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
}
