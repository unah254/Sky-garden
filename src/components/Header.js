import React from "react";

import "./Header.scss";

function HeaderComponent() {
  return (
    <React.Fragment>
      <div className="nav-bar"></div>
      <div className="main">
        <div className="main__content">
          <div className="main__title">HOT holiday deals</div>
          <div className="main__text">
            Sky Garden loves all the fathers and knows that you need some help
            in choosing something special. Here is a few of the sweet things we
            found and you might like.
          </div>
          <div className="main__time">Deal expires in 01:13:12 hrs</div>
        </div>
        <div className="images">
          <img
            className="images__img-1"
            src="https://res.cloudinary.com/ddpvmfuot/image/upload/v1574808070/shoppinglady.png"
            alt=""
          />
          <div className="images__img-2">
            <img
              src="https://res.cloudinary.com/ddpvmfuot/image/upload/v1574808234/black_bubble_1.png"
              alt=""
            />
            <div className="delivery">
              DELIVERY <br />
              SAME DAY!
            </div>
          </div>
          <div className="images__img-3">
            <img
              src="https://res.cloudinary.com/ddpvmfuot/image/upload/v1574808286/discountcircle.png"
              alt=""
            />
            <div className="percent">
              <span>-10%</span>
              <span>
                <img
                  className="line"
                  src="https://res.cloudinary.com/ddpvmfuot/image/upload/v1574933872/discount_line.png"
                  alt=""
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HeaderComponent;
