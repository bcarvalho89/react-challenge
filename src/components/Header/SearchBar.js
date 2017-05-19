import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
     <form className="form">
       <div className="search">
         <div className="search-bar">
           <div className="search-bar__field">
              <i className="search-bar__icon icon--search"></i>
              <input autoComplete="off" placeholder="Digite o produto, marca ou modelo e dá um busca!" className="form__field-input search-bar__input" name="produto" />
           </div>
         </div>
         <div className="search-button">
           <button type="submit" className="btn btn--action">Buscar</button>
         </div>
       </div>
     </form>
     );
  }
}

export default SearchBar;
