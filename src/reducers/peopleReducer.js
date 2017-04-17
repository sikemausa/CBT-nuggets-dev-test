import { ERROR, LOADING, SUCCESS, NOT_STARTED } from './statusTypes';
import { PEOPLE_GET_PENDING, PEOPLE_GET_RESOLVED, PEOPLE_GET_REJECTED } from '../actions/types';

const initialState = {
    data: {
        people: [],
    },
    status: NOT_STARTED,
    error: {},
};

const peopleReducer = (state = initialState, action) => {
    const { type } = action;

    switch (type) {
        case PEOPLE_GET_PENDING: {
            return { ...state,
              status: LOADING,
              error: false,
          };
        }

        case PEOPLE_GET_RESOLVED: {
            return { ...state,
                data: { people: action.people },
                status: SUCCESS,
                error: false,
            };
        }

        case PEOPLE_GET_REJECTED: {
            return { ...state,
              status: ERROR,
              error: action.error,
            };
        }

        default: {
            return state;
        }
    }
};

export default peopleReducer;
