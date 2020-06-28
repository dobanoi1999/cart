import React, { Component } from "react";
import * as actions from './../action/index'
import { connect } from "react-redux";


class Cart extends Component {
  updateCart=(id,i)=>{
    this.props.onClick(id,i);
  }
  onDelete=(id)=>{
    this.props.onDelete(id);
    this.props.onMessage(1);
  }
  render() {
    
    let {id,name,price,amount}=this.props
    return (
        <tbody>
        <tr>
          <th scope="row">
            <img
              src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72"
              href="#"
              className="img-fluid z-depth-0"
            />
          </th>
          <td>
            <h5>
              <strong>{name}</strong>
            </h5>
          </td>
          <td>{price}$</td>
          <td className="center-on-small-only">
            <span className="qty">{amount} </span>
            <div className="btn-group radio-group" data-toggle="buttons">
              <label
               onClick={()=>this.updateCart(id,-1)}
                className="btn btn-sm btn-primary
                              btn-rounded waves-effect waves-light"
              >
                <a>—</a>
              </label>
              <label
              onClick={()=>this.updateCart(id,1)}
                className="btn btn-sm btn-primary
                              btn-rounded waves-effect waves-light"
              >
                <a>+</a>
              </label>
            </div>
          </td>
          <td>{price*amount}$</td>
          <td>
            <button
              onClick={()=>this.onDelete(id)}
              type="button"
              className="btn btn-sm btn-primary waves-effect waves-light"
              data-toggle="tooltip"
              data-placement="top"
              title
              data-original-title="Remove item"
            >
              X
            </button>
          </td>
        </tr>
        
        </tbody>
        
    );
  }
}
const mapStateToProps=(state)=>{
  return{

  }
}
const mapDisPatchToProps=(dispatch,props)=>{
  return {
      onClick:(id,i)=>{
        dispatch(actions.addCart(id,i))
      },
      onDelete:(id)=>{
        dispatch(actions.deleteCart(id))
      },
      onMessage:(m)=>{
        dispatch(actions.message(m))
      }
  }
}

export default connect(mapStateToProps,mapDisPatchToProps)(Cart);



