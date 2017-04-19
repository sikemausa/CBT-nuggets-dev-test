import { FILTER_PEOPLE, PEOPLE_GET_RESOLVED } from '../actions/types';

const initialState = {
    data: {
        searchTerm: '',
        filteredPeople: [],
    },
};

const searchReducer = (state = initialState, action) => {
    const { type } = action;

    switch (type) {

        case PEOPLE_GET_RESOLVED: {
            return { ...state,
                data: {
                    filteredPeople: action.people,
                }
            }
        }

        case FILTER_PEOPLE: {
            return { ...state,
              data: {
                searchTerm: action.searchTerm,
                filteredPeople: action.filteredPeople,
              },
            }
        }

        default: {
            return state;
        }
    }
};

export default searchReducer;
