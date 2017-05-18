import React, { Component } from 'react';

class ProductRating extends Component {
  render() {
    const rating = this.props.rating;
    const ratingStars = parseFloat(rating.stars);
    const fullStars = Math.floor(ratingStars);
    const halfStars = ratingStars % 1;
    const emptyStars = 5 - Math.round(ratingStars);
    var starsList = '';

    for (let i = 0; i < fullStars; i++) {
      starsList += '<span class="star star--full"></span>';
    }

    if (halfStars > 0) {
      starsList += '<span class="star star--half"></span>';
    }

    if (emptyStars > 0) {
      for (let i = 0; i < emptyStars; i++) {
        starsList += '<span class="star star--empty"></span>';
      }
    }

    return(
      <div className="product__rating">
      <div className="product__stars product-info__block">
      <span dangerouslySetInnerHTML={{__html: starsList}}></span>
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
