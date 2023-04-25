import React, { useContext } from 'react';
import './Header.css';
import logo  from'../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
const Header = () => {

  const {user} = useContext(AuthContext)
  console.log(user)
    return (
        <nav className='header'>
          <img src={logo} alt="" />
          <div>
          <Link to="/">Shop</Link>
          <Link to="/Order">Order</Link>
          <Link to="/Inventory">Inventory</Link>
          <Link to="/Login">Login</Link>
          <Link to='/register'>Sign Up</Link>
          {user && <span>welcome{user.displayName}</span>}
          </div>
        </nav>
    );
};

export default Header;