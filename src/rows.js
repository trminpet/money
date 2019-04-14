import React, { Component } from 'react';
import Row from "./row.js";
import "./rows.css";

import {TransactionContext} from "./transactionContext.js";

class Rows extends Component {

constructor(props) {
  super(props);
}


  render() {
    return (
      <TransactionContext.Consumer>
      {({transactions})=>(
         <div className="container-fluid box-rows">
        {transactions.map(transaction=><Row transaction={transaction}/>)}
      </div>
        )}
      
      </TransactionContext.Consumer>
    
    );
  }
}

export default Rows;