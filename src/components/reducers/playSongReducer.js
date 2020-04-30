import { PLAY_SONG } from "../../action/songsAction";

const initalState = {
  song: null,
};
const playSongReducer = (state = initalState, action) => {
  switch (action.type) {
    case PLAY_SONG:
      return {
        song: action.payload,
      };

    default:
      return state;
  }
};
export default playSongReducer;
