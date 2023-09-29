import React, { useEffect, useState } from 'react';
import TopNav from '../Pages/TopNav';
import '../Css/Dashboard.css';
import '../Css/Cards.css';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import { selfPurchaseReward } from '../api/api.js';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataSuccess } from '../Redux/actions/selfPurchaseRewardAction';
import axios from 'axios';
// import { Table, TableContainer } from 'react-bootstrap';
function RewardScreen() {
  const [user, setUser] = useState(null);
  const { data } = useSelector((state) => state.selfPurchaseReducer);
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        await selfPurchaseReward()
          .then((response) => {
            dispatch(fetchDataSuccess(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
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
          changePoints(response.data.bv / 10);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchData(); // Call the async function to fetch data
  }, []);

  const [points, changePoints] = useState(0);
  function pointsDec() {
    changePoints(points - 1000);
    if (points <= 0) {
      changePoints(0);
    }
  }
  function pointsInc() {
    changePoints(points + 1000);
  }

  return (
    <div>
      <TopNav display="Rewards" />
      <div className="Dash">
        <button className="card-button" onClick={pointsDec}>
          -
        </button>
        <div className="Earning">
          <div className="left">B.P.</div>
          <div className="left">{points}</div>

          <div className="sub">(1 B.P. = 10 B.v.)</div>
        </div>
        <button className="card-button" onClick={pointsInc}>
          +
        </button>
      </div>
      <div className="container">
        {data.map((item, index) => (
          <div
            key={index}
            className={
              points < item.bpCheckpoint
                ? 'card cardNotDisplay'
                : 'card cardDisplay'
            }
          >
            {console.log(item)}
            <div className="card-body">
              <h5 className="card-reward">B.P. = {item.bpCheckpoint}</h5>
              {/* <p className="card-text">{item.count}</p> */}
              <h5 className="card-title">Prize</h5>
              <p className="card-text">{item.prize}</p>
              <button
                className={
                  points < item.bpCheckpoint
                    ? 'card-button cardNotDisplay'
                    : 'card-button cardDisplay'
                }
                disabled={points < item.count}
              >
                Redeem
              </button>{' '}
              {/* Add the button */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RewardScreen;
