import axios from "axios";

export const FETCH_SONGS = "FETCH_SONGS";
export const PLAY_SONG = "PLAY_SONG";
export const DELETE_SONG = "DELETE_SONG";
export const FETCH_CATEGORIES = "FETCH_CATEGORIES";
export const FETCH_WEEKLY_TOP_15 = "FETCH_WEEKLY_TOP_15";

export const fetchSongs = () => (dispatch) => {
  axios
    .get("/static/songs.json")
    .then((res) => {
      dispatch({
        type: FETCH_SONGS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
};
export const playSong = (e, song) => {
  return {
    type: PLAY_SONG,
    payload: song,
  };
};
export const deleteSong = (e, id) => {
  return {
    type: DELETE_SONG,
    payload: id,
  };
};
export const fetch_music_categories = () => (dispatch) => {
  axios
    .get("/static/musicCategories.json")
    .then((res) => {
      dispatch({
        type: FETCH_CATEGORIES,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
};
export const fetchTop15 = () => (dispatch) => {
  axios
    .get("/static/weeklyTop15.json")
    .then((res) => {
      dispatch({
        type: FETCH_WEEKLY_TOP_15,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
