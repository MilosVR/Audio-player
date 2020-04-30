import React from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import RecentlyPlayed from "./RecentlyPlayerd/RecentlyPlayed";
import Category from "./Category/Category";
import Footer from "../Footer/Footer";
import WeaklyTop15 from "./WeaklyTop15/WeaklyTop15";
import Tranding from "./Trending/Trending";
import Player from "../Player/Player";
import { connect } from "react-redux";
import Loading from "../Loading/Loading";

const Home = (props) => {
  return (
    <div className="home_wraper">
      {props.songs.loading && props.songs.songs.length !== 0 ? (
        <Loading />
      ) : (
        <div>
          <Banner />
          <RecentlyPlayed />
          <WeaklyTop15 />
          <div className="container">
            <Category />
          </div>
          <Tranding />
          <Footer />
          <Player />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    songs: state.songs,
  };
};

export default connect(mapStateToProps)(Home);
