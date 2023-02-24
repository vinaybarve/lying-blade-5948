import axios from "axios";
import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "./actionType";

const getProductRequestAction = () => {
  return { type: GET_PRODUCTS_REQUEST };
};

const getProductSuccessAction = (payload) => {
  return { type: GET_PRODUCTS_SUCCESS, payload };
};

const getProductFailureAction = () => {
  return { type: GET_PRODUCTS_FAILURE };
};

export const getProducts = (param) => (dispatch) => {
  dispatch(getProductRequestAction());

  axios
    .get("http://localhost:8080/restaurant/", param) //--------------------------API------------->
    .then((res) => {
      console.log(res);
      dispatch(getProductSuccessAction(res.data));
    })
    .catch((err) => {
      dispatch(getProductFailureAction());
    });
};
