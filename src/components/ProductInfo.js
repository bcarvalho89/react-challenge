import React, { Component } from 'react';
import RelatedProducts from './RelatedProducts';

class ProductInfo extends Component {
  render() {
    return (
      <div>
      <div className="product">
      <div className="container">
      <div className="row">
      <div className="column-mobile-3">
      <div className="product-gallery">
      GalleryGalleryGallery Gallery GalleryGalleryGallery
      </div>
      </div>
      <div className="column-mobile-6">
      <div className="product-info">
      <header className="product__header">
      <h1 className="product__title">Smart TV Samsung Série 4 UN32J4300AG 32 polegadas LED Plana</h1>
      <span className="product__more"><span className="product__more-plus">+</span> info</span>
      </header>
      <div className="product__offers">
      <div className="product__price product-info__block">
      <p>A partir de: <span className="product__price-price">R$ <span className="product__price-featured">1.139</span>,90</span></p>
      </div>
      <div className="product__history product-info__block">
      <a href="#"><i className="product__history-icon icon--graph"></i>Veja o histórico de preços de até 1 ano</a>
      </div>
      </div>
      <div className="product__rating">
      <div className="product__stars product-info__block">
      <span className="star star--full"></span>
      <span className="star star--full"></span>
      <span className="star star--full"></span>
      <span className="star star--full"></span>
      <span className="star star--half"></span>
      <a href="#" className="product__rating-count">399 consumidores avaliaram</a>
      </div>
      <div className="product__review product-info__block">
      <a href="#">Enviar avaliação</a>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      <RelatedProducts />
      </div>
      );
}
}

export default ProductInfo;
