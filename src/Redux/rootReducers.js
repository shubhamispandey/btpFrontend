import { combineReducers } from "redux";
import Authorization from "./Slices/Authorization";
import User from "./Slices/User";
import Files from "./Slices/Files";

const rootReducer = combineReducers({
  auth: Authorization,
  user: User,
  files: Files,
});

export default rootReducer;
