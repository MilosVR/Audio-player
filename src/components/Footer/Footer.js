import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer_wraper ">
      <div className="container">
        <div className="logo_image">
          <img src="/assets/logo.png" alt="" />
          <p>Heisenberg Music</p>
        </div>
        <div className="footer_body">
          <div className="footer_body_item">
            <h3 className="main_title">Miraculous Music Station</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat duis aute irure dolor.
            </p>
            <span></span>
          </div>
          <div className="footer_body_item">
            <h3 className="main_title">Download Our App</h3>
            <p>
              Go Mobile with our app. Listen to your favourite songs at just one
              click. Download Now !
            </p>
            <div className="footer_social_links">
              <img src="/assets/google_play.jpg" alt="" />
              <img src="/assets/app_store.jpg" alt="" />
              <img src="/assets/windows_store.jpg" alt="" />
            </div>
            <span></span>
          </div>
          <div className="footer_body_item">
            <h3 className="main_title">Subscribe</h3>
            <p>
              Subscribe to our newsletter and get latest updates and offers.
            </p>
            <div className="footer_subscribe_form">
              <input type="text" placeholder="Enter your name" />
              <input type="text" placeholder="Enter your email" />
              <button className="round_btn primary_btn">Sign me up</button>
            </div>
            <span></span>
          </div>
          <div className="footer_body_item">
            <h3 className="main_title">Contact Us</h3>
            <div className="footer_contact">
              <div className="footer_contact_icons">
                <i className="fas fa-phone-volume"></i>
                <div>
                  <p>Call Us :</p>
                  <p>(+1) 202-555-0176, (+1) 2025-5501</p>
                </div>
              </div>
              <div className="footer_contact_icons">
                <i className="far fa-envelope"></i>
                <div>
                  <p>Email Us :</p>
                  <p>mecazavod@gmail.com</p>
                </div>
              </div>
              <div className="footer_contact_icons">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <p>Walk In :</p>
                  <p>Milke Markovic 6, Pancevo</p>
                </div>
              </div>
            </div>
            <span></span>
          </div>
        </div>
        <div className="footer_copyright">
          Copyright © 2020 <span>Milos Novovic Heisenberg</span> All Rights
          Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
