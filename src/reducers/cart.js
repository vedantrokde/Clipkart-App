import { cartConstants } from "../actions/constants";

const initState = {
    cartItems: {
        // 123: {
        //     _id: 123,
        //     name: 'Samsung mobile',
        //     img: 'some.jpg',
        //     price: 200,
        //     qty: 1,
        // }
    },
    updatingCart: false,
    error: null
};

const cartReducer =  (state = initState, action) => {
    switch(action.type){
        case cartConstants.ADD_TO_CART_REQUEST:
            state = {
                ...state,
                updatingCart: true
            }
            break;
        case cartConstants.ADD_TO_CART_SUCCESS:
            state = {
                ...state,
                cartItems: action.payload.cartItems,
                updatingCart: false
            }
            break;
        case cartConstants.ADD_TO_CART_FAILURE:
            state = {
                ...state,
                updatingCart: false,
                error: action.payload.error
            }
            break;
        case cartConstants.RESET_CART:
            state = {
                ...initState
            }
            break;
        default: 
            break;
    }
    return state;
}

// import { cartConstants } from "../actions/constants";

// const initState = {
//     cartItems: {},
//     loading: false,
//     error: null
// };

// const cartReducer = (state = initState, action) => {
//     switch(action.type){
//         case cartConstants.GET_CART_ITEMS_REQUEST:
//             state = {
//                 ...state,
//                 loading: true
//             }
//             break;
//         case cartConstants.GET_CART_ITEMS_SUCCESS:
//             state = {
//                 ...state,
//                 cartItems: action.payload.cartItems,
//                 loading: false
//             }
//             break;
//         case cartConstants.GET_CART_ITEMS_FAILURE:
//             state = {
//                 ...state,
//                 loading: false,
//                 error: action.payload.error
//             }
//             break;
//         case cartConstants.ADD_TO_CART_REQUEST:
//             state = {
//                 ...state,
//                 loading: true
//             }
//             break;
//         case cartConstants.ADD_TO_CART_SUCCESS:
//             state = {
//                 ...state,
//                 cartItems: action.payload.cartItems,
//                 loading: false
//             }
//             break;
//         case cartConstants.ADD_TO_CART_FAILURE:
//             state = {
//                 ...state,
//                 loading: false,
//                 error: action.payload.error
//             }
//             break;
//         case cartConstants.RESET_CART:
//             state = {
//                 ...initState
//             }
//             break;
//         default:
//             break;
//     }
//     return state;
// }

export default cartReducer;