import { ERROR, LOADING, SUCCESS, NOT_STARTED } from './statusTypes';
import {
    PERSON_GET_PENDING,
    PERSON_GET_RESOLVED,
    PERSON_GET_REJECTED,
} from '../actions/types';

const initialState = {
    data: {
        person: {},
    },
    status: NOT_STARTED,
    error: {},
};

const starshipsReducer = (state = initialState, action) => {
    const { type } = action;

    switch (type) {
        case PERSON_GET_PENDING: {
            return { ...state,
              status: LOADING,
              error: false,
          };
        }

        case PERSON_GET_RESOLVED: {
            return { ...state,
                data: { person: action.person },
                status: SUCCESS,
                error: false,
            };
        }

        case PERSON_GET_REJECTED: {
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
//
export default starshipsReducer;
