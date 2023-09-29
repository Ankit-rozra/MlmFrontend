import React from 'react';
import '../Css/vNav.css';
import { useDispatch } from 'react-redux';
import { selectOption } from '../Redux/actions/action';
import { Link } from 'react-router-dom';

function VNavbar() {
  const dispatch = useDispatch();
  const handleOptionClick = (option) => {
    dispatch(selectOption(option));
  };
  const isAdmin = false;

  return (
    <div className="navbar-container">
      {!isAdmin ? (
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item top">
              <Link to="#" className="nav-link-top">
                <b>Company Name</b>
              </Link>
            </li>
            <li
              className="nav-item"
              onClick={() => handleOptionClick('Dashboard')}
            >
              <Link to="/" className="nav-link">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              {/* <a
                className="nav-link"
                onClick={() => handleOptionClick('Products')}
                href="/products"
              > */}
              <Link to="/products" className="nav-link">
                {' '}
                Products
              </Link>
            </li>
            <li className="nav-item">
              {/* <a
                href="/rewards"
                className="nav-link"
                onClick={() => handleOptionClick('Rewards')}
              > */}
              <Link to="rewards" className="nav-link">
                {' '}
                Rewards
              </Link>
            </li>{' '}
            <li className="nav-item">
              {/* <a
                href="/order"
                className="nav-link"
                onClick={() => handleOptionClick('Order')}
              > */}
              <Link to="/order" className="nav-link">
                {' '}
                Your Orders
              </Link>
            </li>
            <li className="nav-item">
              {/* <a
                href="/about"
                className="nav-link"
                onClick={() => handleOptionClick('About us')}
              > */}
              <Link to="/about" className="nav-link">
                {' '}
                About us
              </Link>
            </li>
            <li className="nav-item">
              {/* <a
                href="/contact"
                className="nav-link"
                onClick={() => handleOptionClick('Contact us')}
              > */}
              <Link to="/contact" className="nav-link">
                {' '}
                Contact us
              </Link>
            </li>
            <li className="nav-item">
              {/* <a
                href="/login"
                className="nav-link"
                onClick={() => handleOptionClick('Login')}
              > */}
              <Link to="/login" className="nav-link">
                {' '}
                Login
              </Link>
              {/* </a> */}
            </li>
            <li className="nav-item">
              {/* <a
                href="/register"
                className="nav-link"
                onClick={() => handleOptionClick('Register')}
              > */}
              <Link to="/register" className="nav-link">
                {' '}
                Sign up
              </Link>
            </li>
            <li className="main-content">
              {/* <a
                href="/network"
                className="nav-link"
                onClick={() => handleOptionClick('Add member')}
              > */}
              <Link to="/network" className="nav-link">
                {' '}
                My Network
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item top">
              {/* <a href="#" className="nav-link-top"> */}
              <Link to="#" className="nav-link-top"></Link>
              <b>Company Name</b> <div className="admin">For Admin</div>
            </li>
            <li className="nav-item">
              {/* <a
                className="nav-link"
                onClick={() => handleOptionClick('Products')}
                href="/requestOrder"
              > */}
              <Link to="/requestOrder" className="nav-link">
                {' '}
                Orders
              </Link>
            </li>
            <li
              className="nav-item"
              onClick={() => handleOptionClick('Dashboard')}
            >
              {/* <a href="/requestReward" className="nav-link"> */}
              <Link to="/requestReward" className="nav-link">
                {' '}
                Rewards
              </Link>
            </li>
            <li className="nav-item">
              {/* <a
                href="/requestRegister"
                className="nav-link"
                onClick={() => handleOptionClick('Rewards')}
              > */}
              <Link to="/requestRegister" className="nav-link">
                {' '}
                Register
              </Link>
            </li>
            <li className="nav-item">
              {/* <a
                href="/requestService"
                className="nav-link"
                onClick={() => handleOptionClick('Order')}
              > */}
              <Link to="/requestService" className="nav-link">
                {' '}
                Services
              </Link>
            </li>

            <li className="main-content">
              {/* <a
                href="/edit"
                className="nav-link"
                onClick={() => handleOptionClick('Add member')}
              > */}
              <Link to="/edit" className="nav-link">
                Edit users
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default VNavbar;
