import React from "react";

import "./CustomerCare.scss";

function CustomerCareComponent() {
  return (
    <div className="customer-care">
      <div className="customer">
        <img
          src="https://res.cloudinary.com/ddpvmfuot/image/upload/v1574833645/Group_7.jpg"
          alt=""
        />
        <div className="text">
          <h3>Customer</h3>
          <h3>Care</h3>
          <p id="phone">+254 718 222 111</p>
          <p>support@sky.garden</p>
          <p>
            Mon-Fri 8 am -8pm
            <br />
            Mon-Fri 8 am -8pm
          </p>

          <div className="button">
            <p>Start Live Chat</p>
          </div>
        </div>

      </div>
      <div className="sell">
        <div className="customer">
          <img
            src="https://res.cloudinary.com/ddpvmfuot/image/upload/v1574835571/Group_7_Copy.png"
            alt=""
          />
          <div className="text">
            <h3>Ready</h3>
            <h3>to Sell?</h3>
            <p>Open your free shop and<br/>
              start selling in 5 min!
            </p>
            <div className="button">
              <p>Open Your Shop</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerCareComponent;
