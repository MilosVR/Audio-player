import React from "react";
import "./Artists.scss";
import { connect } from "react-redux";

const Artists = (props) => {
  return (
    <div className="artists_wraper">
      <div className="container">
        <div className="artists_wraper_headline ">
          <h3 className="main_title">Artists</h3>
        </div>
        <div className="artists_wraper_grid">
          {props.songs.map((item) => {
            return (
              <div className="artists_wraper_grid_item" key={item.id}>
                <div className="artists_wraper_grid_item_image">
                  <img
                    src="http://kamleshyadav.com/html/miraculous/version1/images/svg/play.svg"
                    alt=""
                    className="img_play"
                  />
                  <img src={item.artist_img} alt="" />
                </div>
                <div className="artists_wraper_grid_item_info">
                  <h4>{item.artist}</h4>
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
    songs: state.songs.songs,
  };
};

export default connect(mapStateToProps)(Artists);
