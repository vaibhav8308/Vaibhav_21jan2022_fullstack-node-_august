
import React from "react";
import Products from "./components/Products";
import course from "./course.json"


class  App extends React.Component {
  constructor(){
    super();
    this.state={
      products: course.products,
      sort:""
    }
  }

  render(){
  return (
    <div className="container">
      <header>
<a href="/"> Checkout Page </a>
      </header>
      <main>
   <div className="products">
     <div  className="main"><Products products={this.state.products}/></div>
     <div className="sidebar">Cart items</div>
   </div>


      </main>
      <footer>@MyTutor.com</footer>

    </div>
  );
}
}
export default App;
