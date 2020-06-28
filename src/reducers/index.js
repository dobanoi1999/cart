import {combineReducers} from  'redux';
import ListProduct from './ListProduct';
import Message from './Message';

import ShowCart from './ShowCart.js';

const myReducer =combineReducers({
    ListProduct,
    Message,
    ShowCart

})
export default myReducer;