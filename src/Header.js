import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import { getAuth } from 'firebase/auth'
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const auth= getAuth()
  const user= auth.currentUser;

  const signOut =()=>{
     auth.signOut()
     alert('Logged out')
  }
  return (
    
    <header className="navbar">
      <div className="navbar__logo">
        <Link to="/">🏡 HOSTEL APARTMENTS</Link>
      </div>

       <nav className={`navbar__links ${menuOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/properties">Apartments</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link> 
        {/* <Link to="/blog">Blog</Link> */}
        <div className="navbar__auth">
          {user?<><button onClick={signOut} className="btn login">Logout</button></>: 
          <><Link to="/login" className="btn login">Login</Link></>}
          <Link to="/signup" className="btn signup">Sign Up</Link>
          <Link to='/mybooking' className='btn login'>My booking</Link>
        </div>
      </nav> 
       <div className="navbar__toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div> 
    </header>
  );
};

export default Header;