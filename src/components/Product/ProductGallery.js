// Using react slick for image slider: https://github.com/akiran/react-slick

import React, { Component } from 'react';
import Slick from 'react-slick';

class ProductGallery extends Component {
  render() {
    let items = [];

    let settings = {
      dots: true,
      infinite: true,
      draggable: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    for (let i = 0; i < this.props.items.length; i++) {
      items.push(<div key={i} className="product-gallery__item"><img src={process.env.PUBLIC_URL + '/' + this.props.items[i] } alt="" /></div>);
    }

    return (
      <div className="product-gallery">
      <Slick {...settings}>
      {items}
      </Slick>
      </div>
      );
  }
}

export default ProductGallery;
