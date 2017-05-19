import React, { Component } from 'react';

class NavUser extends Component {
  render() {

    const userNavigation = this.props.navigation.map(function(item, index){
      return (
        <li key={index} className="nav-user__popover-item">
          <a href={item.url} className="nav-user__popover-link"><i className={'nav-user__popover-icon icon--' + item.icon}></i>{item.title}</a>
        </li>
        );
      });

    return (
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
      );
  }
}

export default NavUser;
