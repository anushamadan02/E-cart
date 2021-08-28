import { GET_BROADBAND_PLAN, CREATE_BROADBAND_PLAN} from '../constants/actionTypes';
import * as api from '../api/index.js';
//these action functions can do dispatch and perform api calls

export const getbroadbands= () => async (dispatch) => {
  try {
    const { data } = await api.fetchbroadband();
    console.log("get all broadband plans ")
    dispatch({ type: GET_BROADBAND_PLAN, payload: data});
  } catch (error) {
    console.log(error);
  }
};

export const createBroadbandPlan = (bpost) => async (dispatch) => {
  try {
    const { data } = await api.createBPlan(bpost);
    dispatch({ type: CREATE_BROADBAND_PLAN, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

