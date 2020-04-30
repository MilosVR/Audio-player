import React from "react";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner_wraper container">
      <div className="banner_img">
        <img src="./assets/home_banner.png" alt="" />
      </div>
      <div className="banner_info">
        <h1>
          This Month’s <br />
          <span>Record Breaking Albums!</span>
        </h1>
        <p>
          Dream your moments, Until I Met You, Gimme Some Courage, Dark Alley,
          One More Of A Stranger, Endless Things, The Heartbeat Stops, Walking
          Promises, Desired Games and many more...
        </p>
        <div className="banner_btns">
          <button className="round_btn primary_btn">Listen Now</button>
          <button className="round_btn primary_btn">Add to Queue</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
