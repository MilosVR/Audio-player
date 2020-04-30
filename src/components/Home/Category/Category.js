import React from "react";
import "./Category.scss";
import { connect } from "react-redux";

const Category = (props) => {
  return (
    <div className="category_by_genres ">
      <div className="category_by_genres_grid">
        {props.categories.slice(0, 6).map((item) => {
          return (
            <div className="category_by_genres_grid_item" key={item.id}>
              <img src={item.category_img} alt="" className="category_img" />
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
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.songs.categories,
  };
};

export default connect(mapStateToProps)(Category);
