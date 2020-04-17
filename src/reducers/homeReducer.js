export function homeReducer(state = [], action) {

    if(action.type === 'FETCH_PUBLICATIONS') {
      return { ...state, fetchPublications: action.data }
    } 
  
    return state;
  }