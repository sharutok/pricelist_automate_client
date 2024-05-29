// actions.js
export const SET_PRICE_LIST_NAME = 'SET_PRICE_LIST_NAME';

export const setPriceListName = (name) => ({
    type: SET_PRICE_LIST_NAME,
    payload: name,
});