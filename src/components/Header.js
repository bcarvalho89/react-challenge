import React, { Component } from 'react';

class Header extends Component {
  render() {

    const mainNavigation = this.props.mainNavigation.map(function(item, index){
      return (
        <li key={index} className="nav-list-item">
        <a href={item.url} className="nav-list-link">{item.title}</a>
        </li>
        );
    });

    const userNavigation = this.props.userNavigation.map(function(item, index){
      return (
        <li key={index} className="nav-user__popover-item">
        <a href={item.url} className="nav-user__popover-link"><i className={'nav-user__popover-icon icon--' + item.icon}></i>{item.title}</a>
        </li>
        );
    });

    return (
     <header className="header__bar">
     <div className="header__bar-top">
     <div className="container">
     <div className="row middle-large">
     <div className="column-mobile-2">
     <h1 className="brand">
     <a href="#" className="brand__link" title="Buscapé">
     <img src={process.env.PUBLIC_URL + '/images/logo-buscape.svg'} alt="Buscapé" />
     </a>
     </h1>
     </div>
     <div className="column-mobile-8">
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
     </div>
     <div className="column-mobile-2">
     <nav className="nav-user">
     <div className="avatar">
     <div className="avatar-wrapper">
     <img className="avatar__image" src={process.env.PUBLIC_URL + '/images/user-avatar.jpg'} alt="" />
     <i className="avatar__protege"></i>
     </div>
     <div className="nav-user__popover">
     <ul className="nav-user__popover-list">
     {userNavigation}
     </ul>
     </div>
     </div>
     </nav>
     </div>
     </div>
     </div>
     </div>
     <div className="header__bar-bottom">
     <div className="container">
     <div className="row">
     <div className="column-mobile-12">
     <nav className="navigation">
     <ul className="nav-list">
     {mainNavigation}
     </ul>
     </nav>
     </div>
     </div>
     </div>
     </div>
     </header>
     );
}
}

export default Header;
