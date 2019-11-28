import React from "react";
import PropTypes from "prop-types";

import "./Product.scss";

function ProductComponent(props) {
  const { product } = props;

  const calculatePrice = (value, percentage) => {
    return (value * (100 + percentage)) / 100;
  };
  return (
    <div className={"productContainer"}>
      <div className={"productPercentage"}>
        <span className="percentage">
          <span className="value">- {`${product.offer_benefit_value} %`} </span>
        </span>
      </div>
      <div className={"productImage"}>
        <img className="product-image" src={product.thumbnail} alt="" />
      </div>
      <div className="productInfo">
        <p id="title">{`${product.title}`}</p>
        <p id="partner">{`${product.partner_name}`}</p>
        <p id="price">
          {`${product.stock_record_price_retail}`}{" "}
          {`${product.stock_record_price_currency}`}
          <span>
            <s>
              {`${calculatePrice(
                product.stock_record_price_retail,
                product.offer_benefit_value
              )}`}
              {`${product.stock_record_price_currency}`}
            </s>
          </span>
        </p>
      </div>
    </div>
  );
}

ProductComponent.propTypes = {
  product: PropTypes.shape({}).isRequired,
  key: PropTypes.number
};
export default ProductComponent;
