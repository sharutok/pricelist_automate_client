// redux/actions.js

import { SET_CHAT_LIST, SET_INPUT_MESSAGE_TEXT,SET_DATA_ROWS,SET_INDEXES,SET_ROW_PLACE_VALUE,SET_PRICELIST_HEADER_DETAILS, } from "./contants";


export const setInputMessageText = (data) => ({
    type: SET_INPUT_MESSAGE_TEXT,
    payload: data,
});

export const setChatList = (data) => ({
    type: SET_CHAT_LIST,
    payload: data,
}); 
export const setDataRows = (data) => ({
    type: SET_DATA_ROWS,
    payload: data,
}); 
export const setIndexes = (data) => ({
    type: SET_INDEXES,
    payload: data,
}); 
export const setRowPlaceValue = (data) => ({
    type: SET_ROW_PLACE_VALUE,
    payload: data,
}); 

export const setPricelistHeaderDetails = (data) => ({
    type: SET_PRICELIST_HEADER_DETAILS,
    payload: data,
}); 
