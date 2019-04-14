import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {generateTransaction,getUserTo} from "./transaction.js"

import {TransactionContext} from "./transactionContext.js";
import Rows from "./rows.js";
import Info from "./info.js";

class App extends Component {

constructor(props) {
  super(props);
   this.state = { transactions: [] };
}



  componentDidMount() {
    this._generateInterval();
  }


_generateInterval(){
  var that = this;
     var rand = Math.round(Math.random() * (3000)) + 1000;
    setTimeout(function(){ 
          that._generateTransaction();
            that._generateInterval();  
    }, rand);
}

_generateTransaction(){
  let transactions = this.state.transactions;

  transactions.unshift(generateTransaction());

  let totalValue = this._generateInfo(transactions);

  this.setState({
    transactions,
    totalValue
  });

}

_generateInfo(transactions = []){

  let value = 0
  transactions.forEach(trans => {
    value += trans.state === "incoming"?trans.price:-trans.price
  })
  return value;
}




  render() {
    return (
      <div className="App">
      <TransactionContext.Provider value={{
            info: {
              to:getUserTo(),
              totalValue:this.state.totalValue
            },
            transactions: this.state.transactions
          }}>
      <div className="header">
      <h1>Transactions</h1>
        <Info/>

      </div>
        <Rows/>
   </TransactionContext.Provider>
      </div>
    );
  }
}

export default App;
