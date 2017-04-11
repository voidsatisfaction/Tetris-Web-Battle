import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';

export default class Header extends Component {
  render() {
    const { title, link } = this.props;
    return (
      <div className='header'>
        <div className='header-title'>
          <Link style={{ textDecoration: 'none' }} className='header-title' to={link}>{title}</Link>
        </div>
        <div className='header-menu'>
          <NavLink exact className='header-menu-item' activeClassName='header-active' to='/'>Home</NavLink>
          <NavLink className='header-menu-item' activeClassName='header-active' to='/channel'>Channel</NavLink>
          <NavLink className='header-menu-item' activeClassName='header-active' to='/subroute'>Subroute</NavLink>
        </div>
      </div>
    )
  }
}