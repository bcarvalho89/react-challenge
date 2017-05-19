import React, { Component } from 'react';

class MainNav extends Component {
  render() {

    const mainNavigation = this.props.navigation.map(function(item, index){
      return (
        <li key={index} className="nav-list-item">
          <a href={item.url} className="nav-list-link">{item.title}</a>
        </li>
        );
    });

    return (
      <nav className="navigation">
        <ul className="nav-list">
          {mainNavigation}
        </ul>
      </nav>
      );
  }
}

export default MainNav;
