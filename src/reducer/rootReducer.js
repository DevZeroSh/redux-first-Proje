import { combineReducers } from 'redux';
import { reducerAuth } from './reducerAuth';
import { reducedrCounte } from './reducedrCounte';


export const rootReducer = combineReducers({
    Counter:reducedrCounte,
    Auth:reducerAuth
})