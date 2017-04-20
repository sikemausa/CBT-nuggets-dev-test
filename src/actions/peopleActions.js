import axios from 'axios';
import { actionTypes } from './index.js';

export const peopleActions = {

    getPeopleData: () => {
        return dispatch => {
            dispatch({ type: actionTypes.PEOPLE_GET_PENDING });

            axios.get('/api/people')
            .then(response => {
                dispatch({
                    type: actionTypes.PEOPLE_GET_RESOLVED,
                    people: response.data,
                });
            })
            .catch(err => {
                dispatch({
                    type: actionTypes.PEOPLE_GET_REJECTED,
                    error: err.message,
                });
            });
        };
    },
};
