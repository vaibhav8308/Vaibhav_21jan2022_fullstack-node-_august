import React, { Component } from 'react';
import "./Products.css"
import formatCurrency from './doller';
import  Fade  from 'react-reveal/Fade';
import Modal from 'react-modal';
import  Zoom  from 'react-reveal/Zoom';
/*import { connect } from 'react-redux';
import{fetchProducts} from "../actions/productActions";*/
 export default class Products extends Component {
    constructor(props){
        super(props);
        this.state={
            product : null,
        }
    }
    /*componentDidMount(){
        this.props.fetchProducts();
    }*/
    openModal=(product)=>{
        this.setState({product})
    }
    closeModal=()=>{
        this.setState({product:null})
    }
  render() {
      const {product}=this.state;
    return <div>
        <Fade bottom cascade>
           
                <ul className='courses'>
                {this.props.products.map(product=>(
                    <li key={product._id}>
                    <div className='singlecourse'>
                        <a href={'#'+ product._id}
                         onClick={()=>this.openModal(product)}>
                            <img src={product.image} alt= {product.title}/>
                        <p>{product.title}</p>
                        </a>
                        <div className='coursePrice'>
                            <div>{formatCurrency(product.price)}</div>
                            <button onClick={()=>this.props.addToCart(product)}
                             className='button primary'>Add to Cart</button>
                        </div>
                    </div>
                    </li>
                ))}
            </ul>
            
       
        </Fade>
        {
          product &&(
              <Modal isOpen={true}
              onRequestClose={this.closeModal}>
             <Zoom >
             <button className='close-modal' onClick={this.closeModal}>X CLOSE</button>
                 <div>Modal</div>
                 <div className='product-details'>
                     <img src={product.image}alt={product.title}></img>
                  <div className='product-details-description'>
                      <p>
                          <strong>{product.title}</strong>
                      </p>
                      <p>
                          <strong>{product.description}</strong>
                      </p>
                      <div className='product-price'>
                          {formatCurrency(product.price)}
                          <button className='button primary' onClick={()=>{
                             this.props.addToCart(product);
                             this.closeModal();

                          }}>Add To Cart</button>
                      </div>
                  </div>
                 </div>
                 
             </Zoom>
              </Modal>
          )  
        }
    </div>;
  }
}

/*export default connect((state)=>({products: state.products.items}),
{fetchProducts,})
    (Products);*/
