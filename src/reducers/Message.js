import * as types from './../constants/types';
let initialState='';
    
export const Message=(state=initialState,action)=>{
    switch(action.type){
        case types.MESSAGE:
           switch(action.m){
               case 0:
                   state="mua hàng thành công";
                   break;
                case 1:
                    state="xoá thành công";
                    break;
                default:
                    state='';
                    break;
           }
            return state
        default:
            return state
            
    }
}

export default Message;