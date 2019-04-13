import React, { Component } from 'react';
import Row from "./row.js";
import {generateTransaction} from "./transaction.js"

class Rows extends Component {

constructor(props) {
  super(props);
  this.state = { transactions: [] };
}

  componentDidMount() {
    this.intervalID = setInterval(
      () => this._generateTransaction(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

_generateTransaction(){
  let transactions = this.state.transactions;
  transactions.unshift(generateTransaction());

  this.setState({
    transactions
  });

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