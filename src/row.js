import React, { Component } from 'react';

class Row extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const textColor = this.props.transaction.state === 'incoming' ? 'text-success' : 'text-danger';
        const sign = this.props.transaction.state === 'incoming' ? '+' : '-';
        return (
            <div className="row">
                <div className="col-md-8 col-xs-12">
                    <p className={textColor}>{sign} {this.props.transaction.price}</p>
                </div>
                <div className="col-md-4 col-xs-12">
                    <p>{this.props.transaction.description}</p>
                </div>
            </div>
        );
    }
}

export default Row;
