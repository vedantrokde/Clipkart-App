import { productConstants } from "../actions/constants";

const initState = {
    products: [],
    productsByPrice: {
        under5k: [],
        under10k: [],
        under15k: [],
        under20k: [],
        under30k: []
    },
    page: {},
    productDetails: {},
    loading: false,
    error: null
}

const productReducer = (state = initState, action) => {
    switch (action.type) {
        case productConstants.GET_PRODUCTS_BY_SLUG_REQUEST:
            state = {
                ...initState,
                loading: true
            }
            break;
        case productConstants.GET_PRODUCTS_BY_SLUG_SUCCESS:
            state = {
                ...state,
                loading: false,
                products: action.payload.products,
                productsByPrice: {
                    ...action.payload.productsByPrice
                }
            }
            break;
        case productConstants.GET_PRODUCTS_BY_SLUG_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;
        case productConstants.GET_PRODUCT_PAGE_REQUEST:
            state = {
                ...initState,
                loading: true
            }
            break;
        case productConstants.GET_PRODUCT_PAGE_SUCCESS:
            state = {
                ...state,
                loading: false,
                page: action.payload.page
            }
            break;
        case productConstants.GET_PRODUCT_PAGE_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;
        case productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST:
            state = {
                ...initState,
                loading: true
            }
            break;
        case productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS:
            state = {
                ...state,
                loading: false,
                productDetails: action.payload.product
            }
            break;
        case productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;
        default: break;
    }
    return state;
};

export default productReducer;