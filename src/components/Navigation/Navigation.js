import React, { useEffect, useState } from "react";
import "./Navigation.scss";
import { withRouter } from "react-router-dom";

function Navigation(props) {
  useEffect(() => {
    const hamburger_menu = document.querySelector(".hamburger_menu");
    const side_menu = document.querySelector(".side_menu");

    const toggleHamburgerMenu = () => {
      if (!side_menu.classList.contains("toggle_hamburger_menu")) {
        side_menu.classList.add("toggle_hamburger_menu");
        hamburger_menu.classList.add("toggle_hamburger_menu");
      } else {
        side_menu.classList.remove("toggle_hamburger_menu");
        hamburger_menu.classList.remove("toggle_hamburger_menu");
      }
    };

    hamburger_menu.addEventListener("click", toggleHamburgerMenu);
    return () => {
      hamburger_menu.removeEventListener("click", toggleHamburgerMenu);
    };
  });

  const [formData, setFormData] = useState("");
  const onChange = (e) => {
    setFormData(e.target.value);
  };
  const submitFormData = (e) => {
    e.preventDefault();
    props.history.push(`/search/${formData}`);
  };
  return (
    <div className="navigation_wraper">
      <div className="navigation_inner container">
        <div className="search_songs_form">
          <form onSubmit={submitFormData}>
            <input
              type="text"
              placeholder="Search music here..."
              onChange={onChange}
              value={formData}
            />
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
        <div className="navigation_headline">
          <h4>
            <span>Trending Songs</span> : Dream your moments, Until I Met You,
            Gimme Some Courage, Dark Alley (+8 More)
          </h4>
        </div>
        <div className="navigation_btns">
          <button className="round_btn">Register</button>
          <button className="round_btn">Login</button>
          <div className="hamburger_menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Navigation);
