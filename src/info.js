import React, { Component } from 'react';

import {TransactionContext} from "./transactionContext.js";

class Info extends Component {

constructor(props) {
  super(props);
}


  render() {
    return (
      <TransactionContext.Consumer>
      {({info})=>(
         <div className="info">
         <p>{info.to.name + " " + info.to.surname}</p>
         <p>{info.totalValue}</p>
      </div>
        )}
      </TransactionContext.Consumer>
    
    );
  }
}

export default Info;