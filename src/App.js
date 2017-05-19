import React, { Component } from 'react';
import Header from './components/Header';
import Breadcrumbs from './components/Breadcrumbs';
import ProductDetail from './components/ProductDetail';
import RelatedProducts from './components/RelatedProducts';

import './App.css';

class App extends Component {
  render() {
    const mainNavigation = this.props.customData.navigation;
    const userNavigation = this.props.customData.navigation_user;
    const productDetail = this.props.customData.product_detail;
    const relatedProducts = this.props.customData.related_products;

    return (
      <div>
        <Header mainNavigation={mainNavigation} userNavigation={userNavigation} />
        <Breadcrumbs />
          <main>
            <div className="page-content">
              <ProductDetail productDetail={productDetail} />
              <RelatedProducts relatedProducts={relatedProducts} />
            </div>
          </main>
      </div>
      );
  }
}

export default App;
