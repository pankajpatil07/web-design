import { takeLatest, fork, call, put } from "redux-saga/effects";
import * as actionTypes from "../constants/actionTypes";
import { getProduct } from "../services/service";
import get from "lodash/get";

const _ = { get };

function* workerGetProduct(action) {
  try {
    const response = yield call(getProduct, action.payload);
    const res_body = _.get(response, "data", {});
    const res_status = true;
    if (res_status) {
      yield put({
        type: actionTypes.PRODUCT_SUCCESS,
        payload: _.get(response, "data", []),
      });
    } else {
      yield put({
        type: actionTypes.PRODUCT_FAIL, 
        payload: res_body,
      });
    }
  } catch (err) {
    yield put({
      type: actionTypes.PRODUCT_FAIL,
    });
  }
}

function* watchGetProduct() {
  yield takeLatest(actionTypes.PRODUCT_REQUEST, workerGetProduct);
}

export default [fork(watchGetProduct)];
