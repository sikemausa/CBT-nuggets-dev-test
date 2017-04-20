import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import peopleReducer from './peopleReducer';
import starshipsReducer from './starshipsReducer';
import searchReducer from './searchReducer';
import personReducer from './personReducer';

const rootReducer = combineReducers({
    search: searchReducer,
    people: peopleReducer,
    person: personReducer,
    routing: routerReducer,
    starships: starshipsReducer,
});

export default rootReducer;
