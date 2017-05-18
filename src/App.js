import React, { Component } from 'react';
import Header from './components/Header';
import Breadcrumbs from './components/Breadcrumbs';
import ProductInfo from './components/ProductInfo';
import './App.css';

class App extends Component {
  render() {
    const mainNavigation = this.props.customData.navigation;
    const userNavigation = this.props.customData.navigation_user;

    return (
      <div>
      <Header mainNavigation={mainNavigation} userNavigation={userNavigation} />
      <Breadcrumbs />
      <main>
      <div className="page-content">
      <ProductInfo />
      </div>
      </main>
      </div>
      );
  }
}

export default App;
