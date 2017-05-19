import React, { Component } from 'react';

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorited: false
    };

    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  toggleFavorite() {
    let message = '';
    if (this.state.isFavorited) {
      message = 'Removido com sucesso';
    } else {
      message = 'Adicionado com sucesso';
    }
    this.props.onUpdate(true, message);
    this.setState({
      isFavorited: !this.state.isFavorited
    });
  }


  render() {
    const product = this.props.productInfo;

    return (
      <div className="card product-card">
        <a href={product.link} title={product.name} className="product-card__link-block"></a>
        <div className="inner">
          <div className="product-card__favorite">
            <span onClick={this.toggleFavorite} title={this.state.isFavorited ? 'Remover dos Favoritos' : 'Adicionar aos favoritos'}>
              <svg className={this.state.isFavorited ? 'product-card__favorite-heart is-favorited' : 'product-card__favorite-heart'} height="20" width="20" viewBox="0 0 21 20"><path fillRule="evenodd" strokeWidth="2" d="M6.14 1C3.336 1 1.053 3.46 1.032 6.492c-.04.473-.13 3.225 2.993 5.734 2.936 2.36 5.674 5.26 5.7 5.29l.673.713.67-.715c.03-.03 2.763-2.93 5.7-5.29 3.122-2.508 3.033-5.26 2.99-5.733C19.74 3.46 17.456 1 14.652 1c-1.763 0-3.324.956-4.254 2.41C9.466 1.957 7.906 1 6.14 1"></path></svg>
            </span>
          </div>
          <div className="product-card__image">
            <a href={product.link} className="product-card__link">
              <img title={product.name} className="bui-prevent-error__proc" alt={product.name} src={process.env.PUBLIC_URL + '/' + product.image} />
            </a>
          </div>
          <div className="product-card__info">
            <div className="product-card__name">
              <a href={product.link} className="product-card__link">
                <span>{product.name}</span>
              </a>
            </div>
            <div className="product-card__viewmore">
              <a href={product.link} className="product-card__link">Veja preços em mais lojas</a>
            </div>
          </div>
          </div>
        <div className="product-card__price-container">
          <div className="product-card__price-wrapper">
            <div className="product-card-price">
              <span className="product-card-price__best-price">Melhor Preço</span>
                <a href={product.link} className="product-card__link" title="Ir à Loja">
                  <span className="product-card-price__payment">{product.price.price_installment} {product.price.currency} {product.price.price_fraction}</span>
                  <span className="product-card-price__total">{product.price.currency} {product.price.price_full}</span>
                </a>
              </div>
            <div className="product-card__store">
              <a href={product.link} title="Ir à Loja" className="product-card__store-link">{product.store}</a>
            </div>
          </div>
          <div className="product-card__action">
            <a href={product.link} title="Ir à Loja" className="product-card__link">
              <button className="btn product-card__action-button"><i className="icon--arrow-right"></i></button>
            </a>
          </div>
        </div>
      </div>
      );
    }
  }

  export default ProductCard;
