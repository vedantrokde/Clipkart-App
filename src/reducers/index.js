import authReducer  from './auth';
import categoryReducer from './category';
import productReducer from './product';
import cartReducer from './cart';
import userReducer from './user';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    category: categoryReducer,
    cart: cartReducer,
    product: productReducer,
    user: userReducer
});

export default rootReducer;