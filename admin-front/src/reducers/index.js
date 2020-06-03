import { combineReducers } from 'redux';
import auth from './auth';
import booksReducer from './books-reducer';


export default combineReducers({
    auth: auth,
    listBooks: booksReducer,
});