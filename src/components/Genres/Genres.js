import React from "react";
import "./Genres.scss";
import "../Home/Category/Category.scss";
import { connect } from "react-redux";

const Genres = (props) => {
  return (
    <div className="genres_wraper">
      <div className="container">
        <div className="category_wraper_headline">
          <h3 className="main_title">Music Categories</h3>
        </div>
        <div className="category_by_genres ">
          <div className="category_by_genres_grid">
            {props.categories.map((item) => {
              return (
                <div className="category_by_genres_grid_item" key={item.id}>
                  <img src={item.category_img} alt="" />
                  <img
                    src="http://kamleshyadav.com/html/miraculous/version1/images/svg/play.svg"
                    alt=""
                    className="img_play"
                  />
                  <div className="category_title">
                    <p>{item.category}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.songs.categories,
  };
};

export default connect(mapStateToProps)(Genres);
