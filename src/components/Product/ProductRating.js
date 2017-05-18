import React, { Component } from 'react';

class ProductRating extends Component {
  render() {
    const rating = this.props.rating;
    const ratingStars = parseFloat(rating.stars);
    const fullStars = Math.floor(ratingStars);
    const halfStars = ratingStars % 1;
    const emptyStars = 5 - Math.round(ratingStars);
    var starsList = [];

    for (let i = 0; i < fullStars; i++) {
      starsList.push(<span key={i} className="star star--full"></span>);
    }

    if (halfStars > 0) {
      starsList.push(<span key="half"  className="star star--half"></span>)
    }

    if (emptyStars > 0) {
      for (let i = 0; i < emptyStars; i++) {
        starsList.push(<span key={i} className="star star--empty"></span>)
      }
    }

    return(
      <div className="product__rating">
      <div className="product__stars product-info__block">
      {starsList}
      <a href="#" className="product__rating-count">{rating.reviews_count} consumidores avaliaram</a>
      </div>
      <div className="product__review product-info__block">
      <a href="#">Enviar avaliação</a>
      </div>
      </div>
      );
    }
  }

export default ProductRating;
