import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; 
import {favorites} from './favorites';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            favorites
        }),
        applyMiddleware(thunk)
    );
    return store;
}