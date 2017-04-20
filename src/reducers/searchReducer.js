import { FILTER_PEOPLE, PEOPLE_GET_RESOLVED } from '../actions/types';
import { NOT_STARTED, IN_PROGRESS } from './statusTypes';

const initialState = {
    data: {
        searchTerm: '',
        filteredPeople: [],
    },
    status: NOT_STARTED,
};

const searchReducer = (state = initialState, action) => {
    const { type } = action;

    switch (type) {

        case FILTER_PEOPLE: {
            return { ...state,
                data: {
                    searchTerm: action.searchTerm,
                    filteredPeople: action.filteredPeople,
                },
                status: IN_PROGRESS,
            };
        }

        default: {
            return state;
        }
    }
};

export default searchReducer;
