import { actionTypes } from './index.js';
import axios from 'axios';

export const peopleActions = {

  getPeopleData: () => {

    return dispatch => {
      dispatch({ type: actionTypes.PEOPLE_GET_PENDING });
      axios.get('http://swapi.co/api/people')
      .then(response => {
        dispatch({ type: actionTypes.PEOPLE_GET_RESOLVED, people: response.data.results });
      })
      .catch(err => {
        dispatch({ type: actionTypes.PEOPLE_GET_REJECTED, error: err })
      });
    }
  }

}
