import * as ActionTypes from './ActionTypes';

export const postFavorite = (name) => (dispatch) => {
    setTimeout(() => {
        dispatch(addFavorite(name));
    }, 2000);
}

export const addFavorite = (name) => ({
    type: ActionTypes.ADD_FAVORITE,
    payload: name
});