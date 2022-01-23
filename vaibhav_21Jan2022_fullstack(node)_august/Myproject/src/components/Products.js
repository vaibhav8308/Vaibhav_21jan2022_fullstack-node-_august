import React, { Component } from 'react';
import "./Products.css"
import formatCurrency from './doller';
export default class Products extends Component {
  render() {
    return <div>
        <ul className='courses'>
            {this.props.products.map(product=>(
                <li key={product._id}>
                <div className='singlecourse'>
                    <a href={'#'+ product._id}>
                        <img src={product.image} alt= {product.title}/>
                    <p>{product.title}</p>
                    </a>
                    <div className='coursePrice'>
                        <div>{formatCurrency(product.price)}</div>
                        <button onClick={()=>this.props.addToCart(product)} className='button primary'>Add to Cart</button>
                    </div>
                </div>
                </li>
            ))}
        </ul>
    </div>;
  }
}

