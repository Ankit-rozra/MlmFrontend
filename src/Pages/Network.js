import React, { useEffect } from 'react';
import TopNav from './TopNav';
import { useState } from 'react';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import '../Css/Profile.css';
function Network() {
  const [userDb, setUser] = useState(null);
  const [filteredUser, setFilteredUser] = useState([]);
  const [groupedObject, setGroupedObject] = useState({});
  const [user, setMainUser] = useState(null);
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
      setMainUser(userData);
    }
  }, []);
  console.log(user, 'llll');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/user/alldata`);
        setUser(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData(); // Call the async function to fetch data
  }, []);

  useEffect(() => {
    const token = Cookies.get('token');
    if (token && userDb !== null) {
      const user = jwt_decode(token);

      const userId = user.userId;
      console.log(user, 'hiii');

      const filteredData = userDb.filter(
        (item) => item.sponsor === userId || item.subSponser === userId
      );
      setFilteredUser(filteredData);
    }
  }, [userDb]);
  useEffect(() => {
    const updatedGroupedObject = {};

    filteredUser.forEach((obj) => {
      const id = obj.lengthSC;
      // console.log(obj, 'sdfds');

      if (!updatedGroupedObject[id]) {
        updatedGroupedObject[id] = [];
      }

      updatedGroupedObject[id].push(obj);
    });

    setGroupedObject(updatedGroupedObject);
  }, [filteredUser]);

  const [expandedLevels, setExpandedLevels] = useState({});

  const toggleLevelContent = (level) => {
    setExpandedLevels((prevState) => ({
      ...prevState,
      [level]: !prevState[level], // Toggle the state for the clicked level
    }));
  };
  console.log('filter', groupedObject);

  return (
    <div>
      {console.log(user)}
      <TopNav display="Network" />
      <div className="setGrid">
        {Object.keys(groupedObject).map((key) => (
          <div key={key} className="setLevel">
            <h2
              className="level"
              onClick={() => toggleLevelContent(key)}
              style={{ cursor: 'pointer' }}
            >
              Level: {key - user.lengthSC}
            </h2>
            {expandedLevels[key] && ( // Render content if the level is expanded
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {groupedObject[key].map((user) => (
                  <li key={user._id} className="LevelInfo">
                    <span className="SubInfoLevel1">
                      <strong>Username:</strong> {user.username}&nbsp;{' '}
                    </span>
                    <span className="SubInfoLevel2">
                      <strong>Referral:</strong> {user.referralCode}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Network;
