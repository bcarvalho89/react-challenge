import React, { Component } from 'react';

class RelatedProducts extends Component {
  render() {
    return (
      <div className="related">
      <div className="container">
      <div className="row">


      <div className="column-mobile-3">


      <div className="card product-card">
      <a title="Smart TV Samsung Série 4 UN32J4300AG 32 polegadas LED Plana" className="product-card__link-block" href="#"></a>
      <div className="inner">
      <div className="product-card__favorite">
      <a href="#" title="Adicionar aos favoritos">
      <svg xmlns="http://www.w3.org/2000/svg" className="product-card__favorite-heart" height="20" width="20" viewBox="0 0 21 20"><path fillRule="evenodd" strokeWidth="2" d="M6.14 1C3.336 1 1.053 3.46 1.032 6.492c-.04.473-.13 3.225 2.993 5.734 2.936 2.36 5.674 5.26 5.7 5.29l.673.713.67-.715c.03-.03 2.763-2.93 5.7-5.29 3.122-2.508 3.033-5.26 2.99-5.733C19.74 3.46 17.456 1 14.652 1c-1.763 0-3.324.956-4.254 2.41C9.466 1.957 7.906 1 6.14 1"></path></svg>
      </a>
      </div>
      <div className="product-card__image">
      <a title="Smart TV Samsung Série 4 UN32J4300AG 32 polegadas LED Plana" className="product-card__link" href="#">
      <img title="Smart TV Samsung Série 4 UN32J4300AG 32 polegadas LED Plana" className="bui-prevent-error__proc" alt="Smart TV Samsung Série 4 UN32J4300AG 32 polegadas LED Plana" src={process.env.PUBLIC_URL + '/images/product1.jpg'} />
      </a>
      </div>
      <div className="product-card__info">
      <div className="product-card__name">
      <a className="product-card__link" title="Smart TV Samsung Série 4 UN32J4300AG 32 polegadas LED Plana" href="#">
      <span>Smart TV Samsung Série 4 UN32J4300AG 32 polegadas LED Plana</span>
      </a>
      </div>
      <div className="product-card__viewmore">
      <a title="Smart TV Samsung Série 4 UN32J4300AG 32 polegadas LED Plana" className="product-card__link" href="#">Veja preços em mais lojas</a>
      </div>
      </div>
      </div>
      <div className="product-card__price-container">
      <div className="product-card__price-wrapper">
      <div className="product-card-price">
      <span className="product-card-price__best-price">Melhor Preço</span>
      <a className="product-card__link" title="Ir à Loja" href="#">
      <span className="product-card-price__payment">8x R$ 164,88</span>
      <span className="product-card-price__total">R$ 1.197,96</span>
      </a>
      </div>
      <div className="product-card__store">
      <a title="Ir à Loja" href="#" className="product-card__store-link">PontoFrio.com</a>
      </div>
      </div>
      <div className="product-card__action">
      <a title="Ir à Loja" className="product-card__link" href="#">
      <button className="btn product-card__action-button"><i className="icon--arrow-right"></i></button>
      </a>
      </div>
      </div>
      </div>

      </div>


      </div>
      </div>
      </div>

      );
}
}

export default RelatedProducts;
