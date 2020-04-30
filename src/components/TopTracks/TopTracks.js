import React from "react";
import "./TopTracks.scss";
import { connect } from "react-redux";

const TopTracks = (props) => {
  return (
    <div className="top_tracks_wraper">
      <div className="container">
        <div className="top_tracks_wraper_headline">
          <h3 className="main_title">Top Tracks</h3>
        </div>
        <div className="top_list_grid">
          {props.weekly_top_15 &&
            props.weekly_top_15.map((item, index) => {
              return (
                <div className="top_list_grid_item" key={item.id}>
                  <div className="top_list_grid_item_inner">
                    <div className="top_list_grid_item_info">
                      <span>
                        {parseFloat(item.id) + 1 < 10
                          ? `0${parseFloat(item.id) + 1}`
                          : parseFloat(item.id) + 1}
                      </span>
                      <img src={item.artist_img} alt="" />
                      <div className="top_list_grid_item_title">
                        <h4>{item.song}</h4>
                        <p>{item.artist}</p>
                      </div>
                    </div>
                    <div className="top_list_track_length">
                      <p>5:11</p>
                      <i className="fas fa-ellipsis-h"></i>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    weekly_top_15: state.songs.top15,
  };
};

export default connect(mapStateToProps)(TopTracks);
