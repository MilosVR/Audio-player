import React, { useEffect } from "react";
import "./SearchResult.scss";
import { connect } from "react-redux";
import Player from "../Player/Player";
import { playSong } from "../../action/songsAction";

const SearchResult = (props) => {
  useEffect(() => {
    const play_btn = document.querySelector(".fa-play");
    const pause_btn = document.querySelector(".fa-pause");

    play_btn.style.display = "flex";
    pause_btn.style.display = "none";
  }, [props.songs, props.playSong]);

  return (
    <div className="search_result_wraper">
      <div className="container">
        {props.songs.length > 0 ? (
          <div className="search_results">
            {props.songs.map((item) => {
              return (
                <div
                  className="search_result_item"
                  onClick={(e) => props.playSong(e, item)}
                  key={item.id}
                >
                  <div className="search_result_image">
                    <img
                      src="http://kamleshyadav.com/html/miraculous/version1/images/svg/play.svg"
                      alt=""
                      className="img_play"
                    />
                    <img src={item.artist_img} alt="" />
                  </div>
                  <div className="search_result_info">
                    <h4>{item.title}</h4>
                    <p>{item.artist}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          "Not Found"
        )}
      </div>
      <Player />
    </div>
  );
};

const actions = { playSong };
const mapStateToProps = (state, ownProps) => {
  const query = ownProps.match.params.query;
  const findResult = state.songs.songs.filter((item) => {
    return item.title.toLowerCase().includes(query.toLowerCase());
  });

  return {
    songs: findResult,
    allSongs: state.songs.songs,
    play_song: state.playSong.song,
  };
};

export default connect(mapStateToProps, actions)(SearchResult);
