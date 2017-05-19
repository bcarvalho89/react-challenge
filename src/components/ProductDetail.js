import React, { Component } from 'react';
import ProductPrice from './Product/ProductPrice';
import ProductRating from './Product/ProductRating';
import ProductGallery from './Product/ProductGallery';

class ProductDetail extends Component {

  render() {
    const productDetailData = this.props.productDetail;

    return (
      <div className="product">

      <div className="container">
      <div className="row">
      <div className="column-mobile-3">
      <ProductGallery items={productDetailData.gallery} />
      </div>
      <div className="column-mobile-6">
      <div className="product-info">
      <header className="product__header">
      <h1 className="product__title">{productDetailData.name}</h1>
      <span className="product__more"><span className="product__more-plus">+</span> info</span>
      </header>
      <ProductPrice price={productDetailData.price} />
      <ProductRating rating={productDetailData.rating} />
      </div>
      </div>
      </div>
      </div>
      </div>
      );
    }
  }

  export default ProductDetail;
