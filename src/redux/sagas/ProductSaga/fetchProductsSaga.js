import { put, call, takeEvery } from 'redux-saga/effects';
import { api } from '../../../utils/api';
import * as types from '../../actions/ProductActions/types';

const url = 'indexes/dev-productsv3/docs/search?api-version=2017-11-11';
export const apiClient = {
  fetchProducts: () => {
  const data = {
    filter: "offer_benefit_type eq 'Percentage'",
    select: "title, partner_name, thumbnail, stock_record_price_currency, stock_record_price_retail, offer_benefit_type, offer_benefit_value" 
  }
  return api.post(url,data);
  },
};

export function* fetchProductsWorker() {
  try {
    const response = yield call(apiClient.fetchProducts);
    yield put({
      type: types.FETCH_PRODUCT_SUCCESS,
      payload: { data: response.data.value },
    });
  } catch (error) {
    yield put({
      type: types.FETCH_PRODUCT_ERROR,
      payload: { errors: error.response.data.message },
    });
  }
}

function* fetchProductsWatcher() {
  yield takeEvery(types.FETCH_PRODUCT, fetchProductsWorker);
}

export default fetchProductsWatcher;
