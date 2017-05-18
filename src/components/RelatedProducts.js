import React, { Component } from 'react';
import ProductCard from './ProductCard';

class RelatedProducts extends Component {
  render() {
    const products = this.props.relatedProducts;

    let items = [];

    for (let i = 0; i < products.length; i++) {
      items.push(<div className="column-mobile-3" key={i}><ProductCard productInfo={products[i]} /></div>);
    }

    return (
      <div className="related">
      <div className="container">
      <div className="row">
      {items}
      </div>
      </div>
      </div>
      );
  }
}

export default RelatedProducts;
