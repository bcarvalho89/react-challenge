import React, { Component } from 'react';

class Brand extends Component {
  render() {
    return (
      <h1 className="brand">
        <a href="#" className="brand__link" title="Buscapé">
          <img src={process.env.PUBLIC_URL + '/images/logo-buscape.svg'} alt="Buscapé" />
        </a>
      </h1>
      );
  }
}

export default Brand;
