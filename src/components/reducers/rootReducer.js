import { combineReducers } from "redux";
import songsReducer from "./songsReducer";
import playSongReducer from "./playSongReducer";

const rootReducer = combineReducers({
  songs: songsReducer,
  playSong: playSongReducer,
});
export default rootReducer;
