import userInfoReducer from "./userInfo";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  userInfo: userInfoReducer
});

export default allReducers;