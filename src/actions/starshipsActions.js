import axios from 'axios';
import { actionTypes } from './index.js';

export const starshipsActions = {

    getStarshipsData: (personId) => {
        return dispatch => {
            dispatch({ type: actionTypes.STARSHIPS_GET_PENDING });

            axios.get(`/api/${personId}/starships`)
            .then(response => {
                dispatch({
                    type: actionTypes.STARSHIPS_GET_RESOLVED,
                    starships: response.data,
                });
            })
            .catch(err => {
                dispatch({
                    type: actionTypes.STARSHIPS_GET_REJECTED,
                    error: err,
                });
            });
        };
    },

};
