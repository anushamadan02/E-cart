import { CREATE_PLAN, GET_PLAN} from '../constants/actionTypes';

import * as api from '../api/index.js';
export const addtocart = (post) => async (dispatch) => {
    try {
      const { data } = await api.addtocart(post);
  
      dispatch({ type: CREATE_PLAN, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const getplans = () => async (dispatch) => {
    try {
      const { data } = await api.fetchplanscart();
      console.log("get plans")
      dispatch({ type: GET_PLAN, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };