import React, { Component } from "react";
import Product from "./Product";
import {connect} from 'react-redux';

class ListProduct extends Component {

  
  render() {
    const {ListProduct} = this.props;
    const lProduct=ListProduct.map((item,index)=>{
          
      return <Product name={item.name} star={item.star}
       madeBy={item.madeBy} price={item.price} index={index}
       id={item.id}
       />
  })
    return (
      <section className="section">
        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
       <div className='row'>
        {lProduct}
        
       </div>
      </section>
    );
  }
}
const mapStateToProps=(state)=>{
  return {
      ListProduct:state.ListProduct
  }
}
export default connect(mapStateToProps,null)(ListProduct);
