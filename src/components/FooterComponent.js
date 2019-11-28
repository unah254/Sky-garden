import React from "react";

import "./FooterComponentModule.scss";

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
          <p>Same day delivery</p>
          <p>Secure payment online or on delivery</p>
          <p>Free returns</p>
          <img
            className="car"
            src="https://res.cloudinary.com/ddpvmfuot/image/upload/v1574840441/car_copy.png"
            alt=""
          />
          <img
            className="lock"
            src="https://res.cloudinary.com/ddpvmfuot/image/upload/v1574840571/lock_2_copy.png"
            alt=""
          />
          <img
            className="arrow"
            src="https://res.cloudinary.com/ddpvmfuot/image/upload/v1574922336/icons8-reply-arrow-16.png"
            alt=""
          />
        </div>
        <div className="follow">
          <h3>FOLLOW OUR NEWS</h3>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>LinkedIn</p>
          <img src="" alt=""/>
          <img src="" alt=""/>
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
    </div>
  );
}

export default FooterComponent;
