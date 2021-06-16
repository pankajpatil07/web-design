import * as actionTypes from "../constants/actionTypes";
export function requestProductList(payload, fields) {
  return {
    type: actionTypes.PRODUCT_REQUEST,
    payload: { ...payload, fields },
  };
}
