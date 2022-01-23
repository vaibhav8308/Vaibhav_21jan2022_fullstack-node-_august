
import React from "react";
import Cart from "./components/Cart";
import Products from "./components/Products";
import course from "./course.json"


class  App extends React.Component {
  constructor(){
    super();
    this.state={
      products: course.products,
      cartItems : [],
      sort:""
    }
  }
  // function remove items from cart
  removeFromCart =(product)=>{
    const cartItems= this.state.cartItems.slice();
    this.setState({
    cartItems:cartItems.filter(x=>x._id !== product._id),
  })
  }

  // function to add items to cart
  addToCart = (product)=>{
    const cartItems= this.state.cartItems.slice();
    let alreadyInCart=false;
    cartItems.forEach((item)=>{
      if(item._id===product._id){
        item.count++;
        alreadyInCart= true;
      }
    })
    if (!alreadyInCart){
      cartItems.push({...product,count:1});
    }
    this.setState({cartItems});
  }

  render(){
  return (
    <div className="container">
      <header>
<a href="/"> Checkout Page </a>
      </header>
      <main>
   <div className="products">
     <div  className="main"><Products products={this.state.products}
     addToCart={this.addToCart}/></div>
     <div className="sidebar">
       <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart}/>
     </div>
   </div>


      </main>
      <footer>@MyTutor.com</footer>

    </div>
  );
}
}
export default App;
