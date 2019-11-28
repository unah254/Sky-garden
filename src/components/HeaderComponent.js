import React from "react";

import "./HeaderComponentModule.scss";

function HeaderComponent() {
  return (
    <div className="main">
      <div className="main__content">
        <div className="main__title">HOT holiday deals</div>
        <div className="main__text">
          Sky Garden loves all the fathers and knows that you need some help in
          choosing something special. Here is a few of the sweet things we found
          and you might like.
        </div>
        <div className="main__time">Deal expires in 01:13:12 hrs</div>
      </div>
      <div className="images">
        <img
          className="images__img-1"
          src="https://res.cloudinary.com/ddpvmfuot/image/upload/v1574808070/shoppinglady.png"
        />
        <div className="images__img-2">
          <img src="https://res.cloudinary.com/ddpvmfuot/image/upload/v1574808234/black_bubble_1.png" />
          <div className="delivery">
            DELIVERY <br />
            SAME DAY!
          </div>
        </div>
        <div className="images__img-3">
          <img src="https://res.cloudinary.com/ddpvmfuot/image/upload/v1574808286/discountcircle.png" />
          <div className="percent">-10%</div>
          <div className="line">hi</div>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
