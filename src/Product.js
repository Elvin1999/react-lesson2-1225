import React, { Component } from "react";

export default class Product extends Component {
  render() {
    return <div style={{ width: "auto", margin: "10px" ,
textAlign:"center",
border:"2px solid gray"}}>
    <section style={{display:"flex"}}>
        <img style={{
            width:`${this.props.size}px`,
            height:"100px"
        }}  
        src={this.props.product.avatar} alt="product"
        >
        </img>

        <h2>{this.props.product.price}$</h2>
    </section>
</div>;
  }
}
