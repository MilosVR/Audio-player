import React, { useEffect } from "react";
import "./Player.scss";
import { playSong } from "../../action/songsAction";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const Player = (props) => {
  useEffect(() => {
    // init constants
    const current_song_title = document.querySelector(".current_song_title p");
    const song_slider = document.querySelector(".song_slider");
    const current_time = document.querySelector(".current_time");
    const duration = document.querySelector(".duration");
    const volume_slider = document.querySelector(".volume_slider");
    const next_song_title = document.querySelector(".next_song_title p");
    const play_btn = document.querySelector(".fa-play");
    const pause_btn = document.querySelector(".fa-pause");
    const nextSongBtn = document.querySelector(".fa-step-forward");
    const prevSongBtn = document.querySelector(".fa-step-backward");
    const current_song_img = document.querySelector(".current_song_img");
    const toggle_player_options = document.querySelector(
      ".toggle_player_options"
    );

    const player = document.querySelector("#player");

    const songs = props.songs;
    let currentSong = 0;

    if (props.songs.length !== 0) {
      player.src = props.songs[0].song;
      current_song_img.innerHTML = `<img alt='' src=${songs[currentSong].artist_img}></img>`;
      current_song_title.innerHTML = `<p class='full_song_info'>${
        songs[currentSong].artist + " - " + songs[currentSong].title
      }</p>`;
      next_song_title.innerHTML = `
      <div class='next_song'>
        <img src=${
          songs[currentSong < 12 ? currentSong + 1 : (currentSong = 0)]
            .artist_img
        } />
        <div class='next_song_info'>
         
          <p class='next_song_artist'> ${
            songs[currentSong < 12 ? currentSong + 1 : (currentSong = 0)].artist
          }</p>
          <p class='next_song_description'>${
            songs[currentSong < 12 ? currentSong + 1 : (currentSong = 0)].title
          }</p>
        </div>
      </div>
      `;
      setInterval(showDuration, 100);
    } else {
      return;
    }

    play_btn.style.display = "flex";
    pause_btn.style.display = "none";

    const d = props.songs.findIndex((item) => {
      if (props.play_song !== null) {
        return item === props.play_song;
      }
    });

    if (d !== -1) {
      currentSong = d;
      loadSong();
      play_btn.style.display = "none";
      pause_btn.style.display = "flex";
      song_slider.value = "00:00";
      player.play();
    }

    // window.onload = loadSong;

    function loadSong() {
      player.src = songs[currentSong].song;
      current_song_img.innerHTML = `<img alt='' src=${songs[currentSong].artist_img}></img>`;
      current_song_title.innerHTML = `<p class='full_song_info'>${
        songs[currentSong].artist + " - " + songs[currentSong].title
      }</p>`;
      next_song_title.innerHTML = `
      <div class='next_song'>
        <img src=${
          songs[currentSong < 12 ? currentSong + 1 : (currentSong = 0)]
            .artist_img
        } />
        <div class='next_song_info'>
         
          <p class='next_song_artist'> ${
            songs[currentSong < 12 ? currentSong + 1 : (currentSong = 0)].artist
          }</p>
          <p class='next_song_description'>${
            songs[currentSong < 12 ? currentSong + 1 : (currentSong = 0)].title
          }</p>
        </div>
      </div>
      `;

      setInterval(showDuration, 100);
    }
    setInterval(updateSongSlider, 100);

    function updateSongSlider() {
      var c = Math.round(player.currentTime);
      current_time.innerHTML = `<p>${convertTime(c)}</p>`;

      if (player.ended) {
        playNextSong();
      }
    }

    function updateProgressSlider() {
      const slider_progress = document.querySelector(".slider_progress");
      var c = Math.round(player.currentTime);
      var d = Math.floor(player.duration);
      song_slider.value = c;
      let percentage = c / d;
      let progress = 100 * percentage;

      slider_progress.style.width = `${progress}%`;
    }
    let intervalProgress = setInterval(updateProgressSlider, 100);

    function convertTime(secs) {
      var min = Math.floor(secs / 60);
      var sec = secs % 60;
      min = min < 10 ? "0" + min : min;
      sec = sec < 10 ? "0" + sec : sec;
      return min + ":" + sec;
    }

    function showDuration() {
      var d = Math.floor(player.duration);
      song_slider.setAttribute("max", d);
      duration.innerHTML = `<p>${convertTime(d)}</p>`;
    }

    const playSong = () => {
      player.play();
      play_btn.style.display = "none";
      pause_btn.style.display = "flex";
    };
    function pauseSong() {
      player.pause();
      play_btn.style.display = "flex";
      pause_btn.style.display = "none";
    }

    const seekSong = (e) => {
      const player = document.querySelector("#player");
      player.currentTime = e.target.value;
    };
    const adjustVolume = (e) => {
      const player = document.querySelector("#player");
      player.volume = e.target.value;
    };

    const playNextSong = () => {
      if (currentSong === songs.length - 1) {
        return (currentSong = 0);
      }
      currentSong++;
      play_btn.style.display = "none";
      pause_btn.style.display = "flex";
      loadSong();
      player.play();
    };

    const prevNextSong = () => {
      currentSong--;
      if (currentSong < 0) {
        return (currentSong = songs.length - 1);
      }
      play_btn.style.display = "none";
      pause_btn.style.display = "flex";
      loadSong();
      player.play();
    };

    const togglePlayer = (e) => {
      const controllers = document.querySelector(".controllers");
      if (!controllers.classList.contains("toggle_player")) {
        return controllers.classList.add("toggle_player");
      } else {
        return controllers.classList.remove("toggle_player");
      }
    };

    toggle_player_options.addEventListener("click", togglePlayer);
    prevSongBtn.addEventListener("click", prevNextSong);
    nextSongBtn.addEventListener("click", playNextSong);
    pause_btn.addEventListener("click", pauseSong);
    play_btn.addEventListener("click", playSong);
    song_slider.addEventListener("input", seekSong);
    volume_slider.addEventListener("input", adjustVolume);

    return () => {
      clearInterval(intervalProgress);
      toggle_player_options.removeEventListener("click", togglePlayer);
      prevSongBtn.removeEventListener("click", prevNextSong);
      nextSongBtn.removeEventListener("click", playNextSong);
      pause_btn.removeEventListener("click", pauseSong);
      play_btn.removeEventListener("click", playSong);
      song_slider.removeEventListener("input", seekSong);
      volume_slider.removeEventListener("input", adjustVolume);
    };
  }, [props.songs, props.play_song]);

  return (
    <div className="player_wraper">
      <div className="player">
        <audio id="player"> </audio>
        <div className="controllers">
          <div className="current_song_img"></div>
          <div className="toggle_player_options">
            <i className="fas fa-angle-up"></i>
          </div>
          <div className="song_progress">
            <div className="current_song_title">
              <p>Current Song Title</p>
            </div>
            <div className="current_time_and_duration">
              <div className="slider_progress_wraper">
                <div className="slider_progress"></div>
                <input type="range" min="0" step="1" className="song_slider" />
              </div>
              <div className="time_and_duration">
                <div className="current_time">00:00</div>
                <div className="duration">00:00</div>
              </div>
            </div>
          </div>

          <div className="main_controllers">
            <i className="fas fa-step-backward"></i>
            <div className="play_pause_song">
              <i className="fas fa-pause"></i>
              <i className="fas fa-play"></i>
            </div>
            <i className="fas fa-step-forward"></i>
          </div>
          <div className="adjust_volume">
            <i className="fas fa-volume-down"></i>
            <input
              type="range"
              className="volume_slider"
              min="0"
              max="1"
              step="0.01"
              defaultValue="0.5"
            />
            <i className="fas fa-volume-up"></i>
          </div>
          <div className="next_song_title">
            <p>Next Song Title</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const actions = { playSong };
const mapStateToProps = (state) => {
  return {
    play_song: state.playSong.song,
    songs: state.songs.songs,
  };
};

export default connect(mapStateToProps, actions)(withRouter(Player));
