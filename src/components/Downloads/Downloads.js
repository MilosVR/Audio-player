import React from "react";
import "./Downloads.scss";
import { connect } from "react-redux";
import { deleteSong } from "../../action/songsAction";

const Downloads = (props) => {
  return (
    <div className="downloads_wraper container">
      <div className="downloads_wraper_headline ">
        <h3 className="main_title">Free Downloads</h3>
      </div>
      <div className="downloads_table">
        <table>
          <tbody>
            <tr>
              <th>
                <p>#</p>
              </th>
              <th>
                <p>Artist</p>
              </th>
              <th>
                <p>Song Title</p>
              </th>
              <th className="downlads_item_album">
                <p>Album</p>
              </th>
              <th style={{ textAlign: "center" }}>
                <p>Download</p>
              </th>
              <th style={{ textAlign: "center" }}>
                <p>Remove</p>
              </th>
            </tr>

            {props.songs.map((item) => {
              return (
                <tr>
                  <td className="downlads_item_id">
                    <p>{item.id}</p>
                  </td>
                  <td className="downlads_item_title">{item.artist}</td>
                  <td>
                    <p>{item.title}}</p>
                  </td>
                  <td className="downlads_item_album">
                    <p>Unknown</p>
                  </td>
                  <td className="downloads_td">
                    <a href={item.song} download={item.song}>
                      <i className="fas fa-cloud-download-alt"></i>
                    </a>
                  </td>
                  <td className="delete_td">
                    <i
                      className="fas fa-trash-alt"
                      onClick={(e) => props.deleteSong(e, item.id)}
                    ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const actions = { deleteSong };

const mapStateToProps = (state) => {
  return {
    songs: state.songs.songs,
  };
};

export default connect(mapStateToProps, actions)(Downloads);
