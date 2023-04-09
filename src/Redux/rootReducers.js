import { combineReducers } from "redux";
import Authorization from "./Slices/Authorization";
import User from "./Slices/User";

const rootReducer = combineReducers({
  auth: Authorization,
  user: User,
});

export default rootReducer;
