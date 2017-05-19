import React, { Component } from 'react';

class ProductPrice extends Component {
  render() {
    const priceData = this.props.price;
    const price = priceData.price_full.split(priceData.currency_separator);

    return (
      <div className="product__offers">
        <div className="product__price product-info__block">
          <p>A partir de: <span className="product__price-price">{priceData.currency} <span className="product__price-featured">{price[0]}</span>{price.currency_separator}{price[1]}</span></p>
        </div>
        <div className="product__history product-info__block">
          <a href="#"><i className="product__history-icon icon--graph"></i>Veja o histórico de preços de até 1 ano</a>
        </div>
      </div>
      );
  }
}

export default ProductPrice;
