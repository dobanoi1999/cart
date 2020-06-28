import * as types from './../constants/types';
let initialState=[
    {id:1,name:'iphone 6',star:5,madeBy:'apple',price:15},
    {id:2,name:'xiaomi redmi note 8',star:4,madeBy:'xiaomi',price:20},
    {id:3,name:'samsung a50',star:2,madeBy:'samsung',price:5},
];
export const ListProduct=(state=initialState,action)=>{
    switch(action.type){
        case types.LIST_PRODUCT:
            return state
        default:
            return state
            
    }
}

export default ListProduct;