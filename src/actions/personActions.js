import axios from 'axios';
import { actionTypes } from './index.js';

export const personActions = {

    getPersonData: (personId) => {
        return dispatch => {
            dispatch({ type: actionTypes.PERSON_GET_PENDING });

            axios.get(`/api/person/${personId}`)
            .then(response => {
                dispatch({
                    type: actionTypes.PERSON_GET_RESOLVED,
                    person: response.data,
                });
            })
            .catch(err => {
                dispatch({
                    type: actionTypes.PERSON_GET_REJECTED,
                    error: err,
                });
            });
        };
    },
};
