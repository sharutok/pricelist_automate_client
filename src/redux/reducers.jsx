// redux/reducers.js

import { SET_CHAT_LIST, SET_INPUT_MESSAGE_TEXT, SET_DATA_ROWS, SET_INDEXES, SET_ROW_PLACE_VALUE,SET_PRICELIST_HEADER_DETAILS } from "./contants";


const initialState = {
    inputMessageText: '',
    chatList: [],
    dataRows: [],
    indexes: [],
    rowPlaceValue: [],
    priceListHeaderDetails: {
        pricelist_reference_no: '',
        pricelist_reference_date: '',
        pricelist_description: '',
        pricelist_headers_model_name: '',
        table_header_title: ''
    }
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INPUT_MESSAGE_TEXT:
            return { ...state, inputMessageText: action.payload };
        case SET_CHAT_LIST:
            return { ...state, chatList: action.payload };
        case SET_DATA_ROWS:
            return { ...state, dataRows: action.payload };
        case SET_INDEXES:
            return { ...state, indexes: action.payload };
        case SET_ROW_PLACE_VALUE:
            return { ...state, rowPlaceValue: action.payload };
        case SET_PRICELIST_HEADER_DETAILS:
            return { ...state, priceListHeaderDetails: action.payload };
        default:
            return state;
    }
};

export default rootReducer;
