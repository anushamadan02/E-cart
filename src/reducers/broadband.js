import {CREATE_BROADBAND_PLAN, GET_BROADBAND_PLAN} from '../constants/actionTypes';

// eslint-disable-next-line import/no-anonymous-default-export
export default (broadbands = [], action) => {
    switch (action.type) {
        case GET_BROADBAND_PLAN:
            return action.payload;
        case CREATE_BROADBAND_PLAN:
            return [...broadbands, action.payload];
        default:
            return broadbands
    }
}