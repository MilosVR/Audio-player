import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import "./config.scss";
import Navigation from "./components/Navigation/Navigation";
import SideMenu from "./components/SideMenu/SideMenu";
import Downloads from "./components/Downloads/Downloads";
import History from "./components/History/History";
import Favorites from "./components/Favorites/Favorites";
import Playlist from "./components/Playlist/Playlist";
import Genres from "./components/Genres/Genres";
import Artists from "./components/Artists/Artists";
import TopTracks from "./components/TopTracks/TopTracks";
import {
  fetchSongs,
  fetch_music_categories,
  fetchTop15,
} from "./action/songsAction";
import { connect } from "react-redux";
import SearchResult from "./components/Search/SearchResult";

function App(props) {
  useEffect(() => {
    props.fetchSongs();
    props.fetch_music_categories();
    props.fetchTop15();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <Navigation />
      <SideMenu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/genres" component={Genres} />
        <Route path="/artists" component={Artists} />
        <Route path="/top-tracks" component={TopTracks} />
        <Route path="/downloads" component={Downloads} />
        <Route path="/history" component={History} />
        <Route path="/liked" component={Favorites} />
        <Route path="/playlist" component={Playlist} />
        <Route path="/search/:query" component={SearchResult} />
      </Switch>
    </BrowserRouter>
  );
}

const actions = {
  fetchSongs,
  fetch_music_categories,
  fetchTop15,
};

export default connect(null, actions)(App);
