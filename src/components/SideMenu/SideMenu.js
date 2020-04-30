import React from "react";
import "./SideMenu.scss";
import { Link } from "react-router-dom";

const SideMenu = () => {
  const toggleSideMenu = () => {
    const side_menu = document.querySelector(".side_menu");
    if (!side_menu.classList.contains("open_side_menu")) {
      side_menu.classList.add("open_side_menu");
    } else {
      side_menu.classList.remove("open_side_menu");
    }
  };

  return (
    <div className="side_menu">
      <Link to="/" className="side_menu_nav_link">
        <div className="logo_image">
          <img src="/assets/logo.png" alt="" />
          <span>Heisenberg Music</span>
        </div>
      </Link>
      <div className="side_menu_nav_links">
        <Link to="/" className="side_menu_nav_link">
          <i className="fas fa-home"></i>
          <p>Home</p>
        </Link>
        <Link to="/genres" className="side_menu_nav_link">
          <i className="fas fa-record-vinyl"></i>
          <p>Genres</p>
        </Link>
        <Link to="/artists" className="side_menu_nav_link">
          <i className="fab fa-napster"></i>
          <p>Artists</p>
        </Link>
        <Link to="/top-tracks" className="side_menu_nav_link">
          <i className="fas fa-music"></i>
          <p>Top tracks</p>
        </Link>
        <Link
          to="/downloads"
          className="side_menu_nav_link"
          style={{ marginTop: "3rem" }}
        >
          <i className="fas fa-cloud-download-alt"></i>
          <p>Downloads</p>
        </Link>
        <Link to="/liked" className="side_menu_nav_link">
          <i className="far fa-heart"></i>
          <p>Favorites</p>
        </Link>
        <Link to="/history" className="side_menu_nav_link">
          <i className="fas fa-history"></i>
          <p>History</p>
        </Link>
        <Link
          to="/playlist"
          className="side_menu_nav_link"
          style={{ marginTop: "3rem" }}
        >
          <i className="fas fa-th-list"></i>
          <p>Playlist</p>
        </Link>
      </div>
      <div className="open_side_menu_btn" onClick={toggleSideMenu}>
        <i className="fas fa-angle-left"></i>
        <i className="fas fa-angle-right"></i>
      </div>
      <div className="login_register_btns">
        <button className="round_btn">
          <p>Register</p>
        </button>
        <div className="login_register_btns_divider">
          <p>or</p>
        </div>
        <button className="round_btn">
          <p>Login</p>
        </button>
      </div>
    </div>
  );
};

export default SideMenu;
