import React, { Component } from 'react';
import Row from "./row.js";

class Rows extends Component {

constructor(props) {
  super(props);
  // Don't call this.setState() here!
  this.state = { transactions:[
   {
    name:"Transaction 1",
    code:"trans1",
    price:"100"
   }
  ] };
}

componentDidMount(){
setInterval(function(){  

let transactions = this.state.transactions;

transactions.push({
   name:"Transaction 1",
    code:"trans1",
    price:"100"
})
this.setState({
  transactions:transactions
})
  
    }, 15000);

}

  render() {
    return (
      <div className="container-fluid">
        {this.state.transactions.map(el=><Row transaction={el}/>)}
      </div>
    );
  }
}

export default Rows;