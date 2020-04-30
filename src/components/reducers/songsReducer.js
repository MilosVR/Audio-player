import {
  FETCH_SONGS,
  DELETE_SONG,
  FETCH_CATEGORIES,
  FETCH_WEEKLY_TOP_15,
} from "../../action/songsAction";

const initialState = {
  songs: [],
  categories: [],
  loading: true,
  top15: [],
};

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SONGS:
      return {
        ...state,
        songs: action.payload,
        loading: false,
      };
    case DELETE_SONG:
      return {
        ...state,
        songs: state.songs.filter((item) => item.id !== action.payload),
        loading: false,
      };
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    case FETCH_WEEKLY_TOP_15:
      return {
        ...state,
        loading: false,
        top15: action.payload,
      };
    default:
      return state;
  }
};
export default songsReducer;
