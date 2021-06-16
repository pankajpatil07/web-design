import get from "lodash/get";
import * as actionTypes from "../constants/actionTypes";
import { updateObject } from "../store/utility";
const _ = { get };
const initialState = {
  ProductData: [],
};
const productRequest = (state, action) => {
  return updateObject(state, {
    ProductData: [],
  });
};
export const product = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_REQUEST:
      return productRequest(state, action);
  }
};
