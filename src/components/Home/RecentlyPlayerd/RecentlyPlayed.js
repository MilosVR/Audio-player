import React from "react";
import "./RecentlyPlayed.scss";
import Slider from "react-slick";
import { connect } from "react-redux";
import { playSong } from "../../../action/songsAction";

const RecentlyPlayed = (props) => {
  return (
    <div className="recently_played container">
      <div className="recently_played_headline">
        <h3 className="main_title">Recently Played</h3>
        <p>View More</p>
      </div>
      <div className="recently_played_slider">
        <Slider {...settings}>
          {props.songs.map((item) => {
            return (
              <div
                className="recently_played_slide_item"
                onClick={(e) => props.playSong(e, item)}
                key={item.id}
              >
                <div className="recently_played_image">
                  <img
                    src="http://kamleshyadav.com/html/miraculous/version1/images/svg/play.svg"
                    alt=""
                    className="img_play"
                  />
                  <img src={item.artist_img} alt="" />
                </div>
                <div className="recently_played_slide_info">
                  <h4>{item.title}</h4>
                  <p>{item.artist}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

const actions = {
  playSong,
};
const mapStateToProps = (state) => {
  const recentlyPlayed = state.songs.songs.filter((item) => {
    return item.category.includes("recently");
  });

  return {
    songs: recentlyPlayed,
  };
};

export default connect(mapStateToProps, actions)(RecentlyPlayed);

let settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
