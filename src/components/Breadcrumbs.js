import React, { Component } from 'react';

class Breadcrumbs extends Component {
  render() {
    return (
      <nav className="breadcrumbs">
        <ul className="breadcrumbs-list">
          <li className="breadcrumbs-list__item">
            <a href="#" className="breadcrumbs-list__link">
              <span>Início</span>
            </a>
          </li>
          <li className="breadcrumbs-list__item">
            <a href="#" className="breadcrumbs-list__link">
              <span>Eletrônicos</span>
            </a>
          </li>
          <li className="breadcrumbs-list__item">
            <a href="#" className="breadcrumbs-list__link">
              <span>TV</span>
            </a>
          </li>
          <li className="breadcrumbs-list__item">
            <span>Smart TV Samsung Série 4 UN32J4300AG 32 polegadas LED Plana</span>
          </li>
        </ul>
      </nav>
      );
  }
}

export default Breadcrumbs;
