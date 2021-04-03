import React from 'react';

import logo from './../../images/logo.jpg';
import user from './../../images/user.svg';
import shop from './../../images/shop_bag.svg';
import search from './../../images/search.svg';

import './../../css/menuHeader.css';

function MenuHeader() {
  return <>
    <div className="menu-content">
      <section className="logo"> <img src={logo} />  </section>
      <section className="options" >
        <a href="#" className="outlet">Outlet</a>
        <a href="#">Primavera</a>
        <a href="#">Verão</a>
        <a href="#">Outono</a>
        <a href="#">Inverno</a>
      </section>
      <section className="icons">
        <a href="#"><img className="search" src={search} /></a>
        <a href="#"><img className="user" src={user} /></a>
        <a href="#"><img className="shop" src={shop} /></a>

      </section>
    </div>
  </>
}

export default MenuHeader;