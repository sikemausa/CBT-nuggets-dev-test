import { ERROR, LOADING, SUCCESS, NOT_STARTED } from './statusTypes';
import {
    STARSHIPS_GET_PENDING,
    STARSHIPS_GET_RESOLVED,
    STARSHIPS_GET_REJECTED,
} from '../actions/types';

const initialState = {
    data: {
        people: [],
        starships: [],
    },
    status: NOT_STARTED,
    error: {},
};

const starshipsReducer = (state = initialState, action) => {
    const { type } = action;

    switch (type) {
        case STARSHIPS_GET_PENDING: {
            return { ...state,
              status: LOADING,
              error: false,
          };
        }

        case STARSHIPS_GET_RESOLVED: {
            return { ...state,
                data: { starships: action.starships },
                status: SUCCESS,
                error: false,
            };
        }

        case STARSHIPS_GET_REJECTED: {
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

export default starshipsReducer;
