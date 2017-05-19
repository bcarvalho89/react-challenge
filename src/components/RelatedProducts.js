import React, { Component } from 'react';
import ProductCard from './ProductCard';
import Notify from './Notify';

class RelatedProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      notifyMessage: ''
    };
  }

  onUpdate (status, message) {
    this.setState({
      isActive: status,
      notifyMessage: message
    });

    setTimeout(function(){
     this.setState({
      isActive: false,
      notifyMessage: ''
    });
   }.bind(this),5000);
  }

  render() {
    const products = this.props.relatedProducts;

    let items = [];

    for (let i = 0; i < products.length; i++) {
      items.push(<div className="column-mobile-3" key={i}><ProductCard productInfo={products[i]} onUpdate={this.onUpdate.bind(this)} /></div>);
    }

    return (
      <div className="related">
        <div className="container">
          <div className="row">
            {items}
          </div>
         </div>
        {this.state.isActive && <Notify message={this.state.notifyMessage} /> }
      </div>
      );
    }
  }

  export default RelatedProducts;
