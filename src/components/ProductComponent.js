import React from 'react';
import PropTypes from 'prop-types';

import './ProductComponentModule.scss';

function ProductComponent(props) {
    const { product } = props;

  return (
    <div className={"productContainer"}>
        <div className={"productPercentage"}>
          <span className="percentage">{`${product.offer_benefit_value} %`} </span>
        </div>
        <div className={"productImage"}>
            <img 
            className="product-image"
            src={product.thumbnail} alt=""/>
        </div>
        <div className="productInfo">       
          <p id="title">{`${product.title}`}</p>
          <p id="partner">{`${product.partner_name}`}</p>
          <p id="price">{`${product.stock_record_price_retail}`} {`${product.stock_record_price_currency}`}</p>

      </div>
    </div>
  );
}

ProductComponent.propTypes = {
    product: PropTypes.shape({}).isRequired,
    key: PropTypes.number,
  };
export default ProductComponent;