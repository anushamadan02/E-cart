import { combineReducers } from 'redux';

import posts from './posts';
import datas from "./dataconsump";
import plans from "./plan_cart"

export const reducers = combineReducers({ posts , datas, plans});
