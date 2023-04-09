import { combineReducers } from "redux";
import Authorization from "./Slices/Authorization";
import User from "./Slices/User";
import Popup from "./Slices/Popup";

const rootReducer = combineReducers({
  auth: Authorization,
  user: User,
  popup: Popup,
});

export default rootReducer;
