import React from "react";
import "./App.css";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 48;
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: "none"
  }
}));

export default function SimpleModal() {
  const [open, setOpen] = useState(false);
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBooking = () => {};
  const classes = useStyles();

  return (
    <div>
      <div className="app">
        <hr />
        <h1 className="title"> Richmond Town</h1>
        <hr />
        <h2 className="title"> 27th jun 2019</h2>{" "}
        <div className="time-picker">
          <p>Time Picker</p>
        </div>
        <div>
          <div className="image-section">
            <div className="image-box">
              <img
                className="image"
                src="https://www.marinabaysands.com/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/roomv2-mobile_500x454.jpg"
                alt=""
              />
              <div className="image-overlay" onClick={handleOpen}>
                <p>The Oval</p>
                <p>3rd floor</p>
              </div>
            </div>
            <div className="image-box">
              <img
                className="image"
                src="https://media.architecturaldigest.com/photos/5a4fdfdfb886ab70f8b4b496/3:2/w_1920,h_1280,c_limit/modsy-no-sofa-living-room-04.jpg"
                alt=""
              />
              <div className="image-overlay img-2" onClick={handleOpen}>
                <p>The Oval</p>
                <p>3rd floor</p>
              </div>
            </div>
          </div>
          <div className="image-section">
            <img
              className="image"
              src="https://cdn.wynnlasvegas.com/-/media/images/wynn-las-vegas/room-and-suites/rooms-and-suites-teaser-card-images/125_encore_parlor-suite_living_room_russell-macmasters.ashx"
              alt=""
            />
            <div className="image-overlay" onClick={handleOpen}>
              <p>The Oval</p>
              <p>3rd floor</p>
            </div>
          </div>
        </div>
        <footer className="footer">
          <nav className="nav-bar">
            <i className="fas fa-globe-europe logo" />
            <i className="fas fa-envelope logo" />
            <i className="fas fa-paper-plane logo active" />
            <i className="fas fa-th-large logo" />
            <i className="fas fa-user logo" />
          </nav>
        </footer>
      </div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
      >
        <div className="modal" style={modalStyle}>
          <button className="close-modal" onClick={handleClose}>
            Close
          </button>
          <div>
            <img
              className=""
              src="https://www.marinabaysands.com/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/roomv2-mobile_500x454.jpg"
              alt=""
            />
          </div>
          <div>
            <p>Includes:</p>
            <div />
          </div>
          <div>
            <p>Date & Time of booking:</p>
            <div>
              <p>June 27th 2019</p>
              <p>3:00 AM -> 4:00AM</p>
            </div>
          </div>
          <div>
            <p>About the room:</p>
            <div>
              <p>The oval is on the 3rd floor of HSR @gethr.</p>
            </div>
          </div>
          <div className="booking-footer" onClick={handleBooking}>
            <p>Book</p>
          </div>
        </div>
      </Modal>
    </div>
  );
}
