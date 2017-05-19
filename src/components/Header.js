import React, { Component } from 'react';
import Brand from './Header/Brand';
import SearchBar from './Header/SearchBar';
import NavUser from './Header/NavUser';
import MainNav from './Header/MainNav';

class Header extends Component {
  render() {

    const mainNavigation = this.props.mainNavigation;
    const userNavigation = this.props.userNavigation;

    return (
      <header className="header__bar">
        <div className="header__bar-top">
          <div className="container">
            <div className="row middle-large">
              <div className="column-mobile-2">
                <Brand />
              </div>
              <div className="column-mobile-8">
                <SearchBar />
              </div>
              <div className="column-mobile-2">
                <NavUser navigation={userNavigation} />
              </div>
            </div>
          </div>
        </div>
        <div className="header__bar-bottom">
          <div className="container">
            <div className="row">
              <div className="column-mobile-12">
                <MainNav navigation={mainNavigation} />
              </div>
            </div>
          </div>
        </div>
      </header>
      );
    }
  }

  export default Header;
