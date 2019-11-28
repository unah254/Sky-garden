import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import { fetchProducts } from "../redux/actions/ProductActions/actions";
import "./Content.scss";
import ProductComponent from "./Product";

function ContentComponent(props) {
  const { fetchProducts, products } = props;

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <React.Fragment>
      <div className={"ContentContainer"}>
        {products &&
          products.map(product => (
            <ProductComponent product={product} key={product.id} />
          ))}
      </div>
      <div className="button-container">
        <div className="button">
          <p id="load-text">LOAD MORE</p>
        </div>
      </div>
    </React.Fragment>
  );
}

ContentComponent.propTypes = {
  fetchProducts: PropTypes.any
};

const mapStateToProps = ({ products: { data, isFetching } }) => ({
  products: data,
  loading: isFetching
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchProducts
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ContentComponent);
