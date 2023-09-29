import React, { useEffect } from 'react';
import TopNav from './TopNav';
import { useState } from 'react';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import '../Css/Profile.css';

function Profile() {
  const [user, setUser] = useState(null);
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
  return (
    <div>
      {console.log(user)}
      <TopNav display="Profile" />
      {user !== null && (
        <div className="profile">
          {/* Your content goes here */}

          <p>Username : {user.username}</p>
          <p>Email : {user.email}</p>
          <p>Mobile : {user.mobile}</p>
          <p>Aadhaar : {user.adhaarNumber}</p>
          <p>Referral Code : {user.referralCode}</p>
          <p>Upi Id : {user.upi}</p>
          <p>Address : {user.address}</p>
        </div>
      )}
      {user === null && <div>Please Login</div>}
    </div>
  );
}

export default Profile;
