import * as types from '../constants/types';

export const onAddProduct =(product)=>{
    return{
        type:types.ADD_PRODUCT,
        product
    }
}
export const listProduct=()=>{
    return {
        type:types.LIST_PRODUCT
        
    }
}
export const showCart=()=>{
    return {
        type:types.SHOW_CART
    }
}
export const addCart=(id,i)=>{
    return {
        type:types.ADD_CART,
        id,
        i
    }
}
export const deleteCart=(id)=>{
    return {
        type:types.DELETE_CART,
        id
    }
}
export const message=(m)=>{
    return {
        type:types.MESSAGE,
        m
    }
}