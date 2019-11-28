import * as types from './types';

export const fetchProducts = payload => ({
  type: types.FETCH_PRODUCT,
  payload,
});

export const fetchProductsSuccess = payload => ({
  type: types.FETCH_PRODUCT_SUCCESS,
  payload,
});

export const fetchProductsError = payload => ({
  type: types.FETCH_PRODUCT_ERROR,
  payload,
});