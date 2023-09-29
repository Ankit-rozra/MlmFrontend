import React, { useEffect } from 'react';
import TopNav from './TopNav';
import { useState } from 'react';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import '../Css/Dashboard.css';
function Dashboard() {
  const [user, setUser] = useState(null);
  const [pvValue, setPvValue] = useState(null);
  const [pvIncome, setPvIncome] = useState(null);
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
          console.log(response.data);
          localStorage.setItem('userData', JSON.stringify(response.data));
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchData(); // Call the async function to fetch data
  }, []);
  useEffect(() => {
    const fetchPv = async () => {
      try {
        const response = await axios.get('http://localhost:5000/user/alltopup');
        setPvValue(response.data.pvvalue);
        console.log(response.data.pvvalue);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPv(); // Call the async function to fetch data
  }, []);
  useEffect(() => {
    const fetchPv = async () => {
      const token = Cookies.get('token');
      if (token) {
        const user = jwt_decode(token);
        const userId = user.userId;
        console.log(userId);

        try {
          const response = await axios.get(
            `http://localhost:5000/user/leftright/${userId}`
          );
          setPvValue(response.data.pvvalue);
          console.log(response, 'fkdlhi');
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchPv(); // Call the async function to fetch data
  }, []);
  useEffect(() => {
    pvValue !== null && user.pv !== null && setPvIncome(pvValue * user.pv);
  }, []);
  return (
    <div>
      <TopNav display="Dashboard" />

      <ul className="Dash">
        <li className="Earning w">
          <div className="left ">Direct Joining Income</div>
          <div className="left">
            Rs. {user !== null ? user.directJoinningBonus : '0'}
          </div>
        </li>
        <li className="Earning q">
          <div className="left ">Pair Income</div>
          <div className="left">Rs. 0000</div>
        </li>
        <li className="Earning q">
          <div className="left">Autopool Income</div>
          <div className="left">
            Rs. {user !== null ? Math.floor(pvValue * user.pv) : '0'}
          </div>
        </li>
        <li className="Earning e">
          <div className="left">Repurchase Income</div>
          <div className="left">Rs. 0000</div>
        </li>
        <li className="Earning r">
          <div className="left">B.V.</div>
          <div className="left">{user !== null ? user.bv : '0'}</div>
        </li>
        <li className="Earning t">
          <div className="left">Total Income</div>
          <div className="left">
            Rs.{' '}
            {user !== null
              ? Math.floor(user.directJoinningBonus + pvValue * user.pv)
              : '0'}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Dashboard;
