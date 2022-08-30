import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar';

function NavBar({authState, setAuthState}) {



  return (
    <nav>
      <div className="logo">BlackJack</div>
      <i className="fas fa-bars" />
      <ul>
        {!authState
          ? (
            <ul>
              <li><Link to="/registration">Sign Up</Link></li>
              <li><Link to="/login">Sign in</Link></li>
              <li><Link to="/">Home</Link></li> 
            </ul>
          )
          : (
            <ul>
              <li><Link to={`/lk/${authState.id}`}>{authState.name || 'nickname'}</Link></li>
              <li><Link to="/">Home</Link></li>
              <li><a id="exit" onClick={logoutHandler} href="/">Logout</a></li>
            </ul>
          )}
      </ul>
    </nav>
  );
}


export default NavBar;