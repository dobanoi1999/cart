import React, { Component } from "react";
import {connect} from 'react-redux';
import * as actions from './../action/index'

class Product extends Component {
  findProduct=(id)=>{
    let p={};
    const  product=this.props.ListProduct.map((item)=>{
      if(item.id===id){
        p= item;
      } 
    })
    return p;
  }
   onAddCart=(id)=>{
    const product=this.findProduct(id);
     this.props.onAddProduct(product);
     this.props.onMessage(0);
  }
  render() {
    const { name, star, madeBy,price,id} = this.props;
    let stars=[];
    for(let i=1;i<star;i++){
       stars.push( <li>
        <i className="fa fa-star" />
        </li>)
    }
    
    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img
              src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72"
              className="img-fluid"
              href="#"
            />
            <a>
              <div className="mask waves-light waves-effect waves-light" />
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <a>{name}</a>
              </strong>
            </h4>
            <ul className="rating">
                {stars}
            </ul>
            <p className="card-text">Sản phẩm do {madeBy} sản xuất</p>
            <div className="card-footer">
    <span className="left">{price}$</span>
              <span className="right">
                <a
                  onClick={()=>this.onAddCart(id)}
                  className="btn-floating blue-gradient"
                  data-toggle="tooltip"
                  data-placement="top"
                  title
                  data-original-title="Add to Cart"
                >
                  <i className="fa fa-shopping-cart" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps=(state)=>{
  return{
      ListProduct:state.ListProduct
  }
}
const mapDispatchToProps=(dispatch,props)=>{
    return {
      onAddProduct:(product)=>{
          dispatch(actions.onAddProduct(product))
      },
      onMessage:(m)=>{
        dispatch(actions.message(m))
      }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Product);
