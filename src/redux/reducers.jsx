// reducer.js
import { SET_PRICE_LIST_NAME } from './actions';

const initialState = {
    priceListName: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRICE_LIST_NAME:
            return {
                ...state,
                priceListName: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;