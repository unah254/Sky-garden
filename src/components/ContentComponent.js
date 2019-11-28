import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { fetchProducts } from '../redux/actions/ProductActions/actions';
import './ContentComponentModule.scss';
import ProductComponent from './ProductComponent';

function ContentComponent(props) {
  const {fetchProducts, products } = props

  useEffect(() => {
    fetchProducts()
  },[]);


  return (
    <div className={"ContentContainer"}>
      {products && products.map(product => (
        (
          <ProductComponent product={product} key={product.id}/>
        )
      ))}
    </div>
  );
}

ContentComponent.propTypes = {
    fetchProducts: PropTypes.any,
}

const mapStateToProps = ({ products: { data, isFetching } }) => ({
  products: data,
  loading: isFetching,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchProducts,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ContentComponent);