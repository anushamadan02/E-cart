import { combineReducers } from 'redux';

import posts from './posts';
import datas from "./dataconsump";
import plans from "./plan_cart"
import broadbands from "./broadband";

export const reducers = combineReducers({ posts , datas, plans, broadbands});
