import axios from 'axios';
import { actionTypes } from './index.js';

export const searchActions = {

    filterPeople: (value) => {
        return (dispatch, getState) => {
            const { people } = getState().people.data;
            const filteredPeople = people.filter(person => {
                return person.name.toLowerCase().includes(value.toLowerCase());
            });
            dispatch({
                type: actionTypes.FILTER_PEOPLE,
                searchTerm: value,
                filteredPeople,
            });
        };
    },
};
