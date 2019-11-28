import * as types from '../../actions/ProductActions/types';

export const initialState = {
  errors: {},
  isFetching: false,
  success: false,
  data: [],
};

const fetchProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCT: {
      return {
        ...state, ...action.payload, isFetching: true,
      };
    }

    case types.FETCH_PRODUCT_SUCCESS: {
      return {
        ...state, ...action.payload, isFetching: false, success: true,
      };
    }

    case types.FETCH_PRODUCT_ERROR: {
      return {
        ...state, ...action.payload, isFetching: false,
      };
    }
    default: {
      return state;
    }
}
};

export default fetchProductsReducer;
