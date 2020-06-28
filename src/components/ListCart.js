import React, { Component } from "react";
import Cart from './Cart';
import Total from './Total';
import {connect} from "react-redux"

class ListCart extends Component {
  render() {
  const {listCart} =this.props
    let total=0;
    listCart.map((item)=>{
        total+=item.amount*item.price;
    })
    const IlistCart=listCart.map((item,index)=>{
          return <Cart id={item.id} name={item.name} price={item.price} amount={item.amount} />
    })  
    
    return (
      <section className="section">
        <div className="table-responsive">
          <table className="table product-table">
            <thead>
              <tr>
                <th />
                <th>Sản Phẩm</th>
                <th>Giá</th>
                <th>Số Lượng</th>
                <th>Tổng Cộng</th>
                <th />
              </tr>
            </thead>
            {IlistCart}
            <Total total={total} />
          </table>

        </div>
      </section>
    );
  }
}
const mapStateToProps=(state)=>{
    return {
      listCart:state.ShowCart
    }
}

export default connect(mapStateToProps,null)(ListCart);
