import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './NavBar';

function NavBar() {


  return (
    <nav>
      <div className="logo">BlackJack</div>
      <i className="fas fa-bars" />
      <ul>
        {!authState
          ? (
            <ul>
              <li><NavLink to="/registration">Sign Up</NavLink></li>
              <li><NavLink to="/login">Sign in</NavLink></li>
              <li><NavLink to="/">Home</NavLink></li> 
            </ul>
          )
          : (
            <ul>
              <li><NavLink to={`/lk/${authState.id}`}>{authState.name || 'nickname'}</NavLink></li>
              <li><NavLink to="/">Home</NavLink></li>
              <li><a id="exit"  href="/">Logout</a></li>
            </ul>
          )}
      </ul>
    </nav>
  );
}

export default NavBar;