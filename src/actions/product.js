import axios from "../helpers/axios"
import { productConstants } from "./constants";

export const getProductBySlug = (slug) => {
    return async dispatch => {

        dispatch({ type:productConstants.GET_PRODUCTS_BY_SLUG_REQUEST });
        const res = await axios.get(`/products/${slug}`);

        if(res.status===200){
            dispatch({
                type: productConstants.GET_PRODUCTS_BY_SLUG_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: productConstants.GET_PRODUCTS_BY_SLUG_FAILURE,
                payload: res.error
            });
        }
    }
};

export const getProductDetailsById = (payload) => {
    return async dispatch => {

        const { id } = payload.params;

        dispatch({ type:productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST });
        const res = await axios.get(`/product/${id}`);

        if(res.status===200){
            dispatch({
                type: productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: productConstants.GET_PRODUCTS_BY_SLUG_FAILURE,
                payload: res.error
            });
        }
    }
};

export const getProductPage = (payload) => {
    return async dispatch => {
        const { cid, type } = payload;

        dispatch({ type:productConstants.GET_PRODUCT_PAGE_REQUEST });
        const res = await axios.get(`/page/${cid}/${type}`);

        if(res.status===200){
            dispatch({
                type: productConstants.GET_PRODUCT_PAGE_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: productConstants.GET_PRODUCT_PAGE_FAILURE,
                payload: res.error
            });
        }
    }
};