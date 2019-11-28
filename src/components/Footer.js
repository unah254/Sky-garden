import React from "react";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons";

import "./Footer.scss";

function FooterComponent() {
  return (
    <div className="FooterContainer">
      <div className="header">
        <p id="logo">
          <div className="footer-text">Get</div>
          <div>
            <img
              src="https://res.cloudinary.com/ddpvmfuot/image/upload/v1574860949/skygarden_logo_pos_copy.png"
              alt=""
            />
          </div>
          <div className="footer-text">App.</div>
        </p>
        <p className="extra-text">It's free!</p>
      </div>
      <img
        className="playstore"
        src="https://res.cloudinary.com/ddpvmfuot/image/upload/v1574840644/Playstore.png"
        alt=""
      />
      <div className="content">
        <div className="company">
          <h3>COMPANY</h3>
          <p>About Us</p>
          <p>Sell with Sky,Garden</p>
          <p>Sky,Garden Blog</p>
          <p>Returns&Exchange</p>
        </div>
        <div className="contact">
          <h3>CONTACT US</h3>
          <p>FAQ Center</p>
          <p>hello@sky,garden</p>
          <p>
            5th floor Senteu Plaza<br></br>
            Nairobi Kenya
          </p>
        </div>
        <div className="shopping">
          <h3>SHOPPING WITH US IS EASY</h3>
          <p>
            {" "}
            <img
              className="car"
              src="https://res.cloudinary.com/ddpvmfuot/image/upload/v1574840441/car_copy.png"
              alt=""
            />{" "}
            Same day delivery
          </p>
          <p>
            {" "}
            <img
              className="lock"
              src="https://res.cloudinary.com/ddpvmfuot/image/upload/v1574840571/lock_2_copy.png"
              alt=""
            />{" "}
            Secure payment online or on delivery
          </p>
          <p>
            <FontAwesomeIcon icon={faUndo} className="social" /> Free returns
          </p>
        </div>
        <div className="follow">
          <h3>FOLLOW OUR NEWS</h3>
          <p>
            <FontAwesomeIcon icon={faFacebookF} className="social" /> Facebook
          </p>
          <p>
            <FontAwesomeIcon icon={faInstagram} className="social" /> Instagram
          </p>
          <p>
            <FontAwesomeIcon icon={faLinkedinIn} className="social" /> LinkedIn
          </p>
        </div>
      </div>
      <div className="icons">
        <img
          className="mpesa"
          src="https://res.cloudinary.com/ddpvmfuot/image/upload/v1574840626/Mpesa.png"
          alt=""
        />
        <img
          className="equitel"
          src="https://res.cloudinary.com/ddpvmfuot/image/upload/v1574840497/Equitel.png"
          alt=""
        />
        <img
          className="visa"
          src="https://res.cloudinary.com/ddpvmfuot/image/upload/v1574840721/Visa.png"
          alt=""
        />
        <img
          className="mastercard"
          src="https://res.cloudinary.com/ddpvmfuot/image/upload/v1574840609/Mastercard.png"
          alt=""
        />
      </div>
      <div className="copyright">
        <p> © Sky,Garden.2019</p>
      </div>
      <div className="policy">
        <p> Privacy Policy|Terms and Conditions</p>
      </div>
    </div>
  );
}

export default FooterComponent;
