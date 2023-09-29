import React, { useState, useEffect } from 'react';
import '../Css/TopNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import LiveDate from '../Components/LiveDate';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

const HomeScreen = (props) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const token = Cookies.get('token');
      if (token) {
        const user = jwt_decode(token);
        const userId = user.userId;
        console.log(userId);

        try {
          const response = await axios.get(
            `http://localhost:5000/user/userInfo/${userId}`
          );
          setUser(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchData(); // Call the async function to fetch data
  }, []);
  const [isDropdownVisible, setIsDropdownVisible] = useState(true);
  const screenWidth = window.innerWidth;
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleOptions = () => {
    setIsCollapsed(!isCollapsed);
  };
  window.addEventListener('resize', handleWindowResize);
  function handleWindowResize() {
    const screenWidth = window.innerWidth;
    changeScreen(screenWidth);
  }

  const [screen, changeScreen] = useState(screenWidth);
  const handleIconClick = () => {
    setIsDropdownVisible(isDropdownVisible);
  };

  const state = useSelector((state) => state.data);
  const num = state.length;
  return (
    <nav className="Hnavbar">
      <div className="Hnavbar-nav">
        {screen > 700 && (
          <span className="Hnav-item">
            <a className="Hnav-link">{props.display}</a>
          </span>
        )}

        <span className="Hnav-item-right ExampleComponent">
          {screen > 700 ? (
            <span className="iconBox">
              <Link to="/cart" className="iconButton">
                <FontAwesomeIcon icon={faShoppingCart} className="icons" />
              </Link>
              <Link to="/notification" className="iconButton">
                <FontAwesomeIcon icon={faBell} className="icons" />
              </Link>
              <Link to="/profile" className="iconButton">
                <FontAwesomeIcon icon={faUserCircle} className="icons" />
              </Link>
              <p className="User">{user.username}</p>

              {/* <LiveDate /> */}
            </span>
          ) : (
            <div className="flexEnd">
              <span className="title">{props.display}</span>
              <span className="hamburger-icon" onClick={toggleOptions}>
                <FontAwesomeIcon icon={faBars} />
              </span>
              {!isCollapsed && (
                <div className="options">
                  <div>
                    <Link to="/cart" className="iconButton">
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        className="icons"
                      />
                    </Link>
                  </div>
                  <div>
                    <Link to="/notification" className="iconButton">
                      <FontAwesomeIcon icon={faBell} className="icons" />
                    </Link>
                  </div>
                  <div>
                    <Link to="/profile" className="iconButton">
                      <FontAwesomeIcon icon={faUserCircle} className="icons" />
                    </Link>
                  </div>{' '}
                </div>
              )}
            </div>
          )}
        </span>
      </div>
    </nav>
  );
};

export default HomeScreen;
