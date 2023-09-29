import TopNav from './TopNav';
import React, { useState } from 'react';
import '../Css/Log.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Cookies from 'js-cookie';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [address, setAddress] = useState('');
  const [topup, setTopup] = useState(100);
  const [referral, setReferral] = useState('');
  const [subreferral, setSubreferral] = useState('');
  const [errorM, setErrorM] = useState('');

  // const [referral, setReferral] = useState('');
  const [phone, setPhone] = useState('');
  const [upi, setUpi] = useState('');
  const [secret_question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      username: username,
      password: password,
      email: email,
      aadhar: aadhar,
      phone: phone,
      address: address,
      secret_question: secret_question,
      answer: answer,
      topup: topup,
      referral: referral,
      subreferral: subreferral,
      upi: upi,
    };
    // const jsonString = JSON.stringify(formData);
    // console.log(jsonString);
    await axios
      .post('http://localhost:5000/user/emailreg', {
        username: username,
        password: password,
        email: email,
        adhaarNumber: aadhar,
        mobile: phone,
        address: address,
        question: secret_question,
        answer: answer,
        topupAmount: topup,
        referralCode: referral,
        subRerralCode: subreferral,
        upi: upi,
      })
      .then((response) => {
        // Handle the response from the server if needed
        console.log(response);
        Cookies.set('token', response);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error('Error:', error.response);
        setErrorM(error.response);
      });
    // setUsername('');
    // setEmail('');
    // setPassword('');
    // setAadhar('');
    // setAddress('');
    // setReferral('');
    // setPhone('');
    // setUpi('');
    // setQuestion('n/a');
    // setAnswer('');
  };
  // const state = useSelector((state) => state.authentication.credentials);
  return (
    <div>
      <TopNav display="Sign up" />
      <div className="Log-form">
        <h1>Sign up</h1>
        <div className="errorMessage">{errorM}</div>
        <div className="input">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>{' '}
        <div>
          <input
            type="text"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          {' '}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Aadhar Number"
            value={aadhar}
            onChange={(e) => setAadhar(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        {/* <div>
          <input
            type="text"
            placeholder="Referral code"
            value={referral}
            onChange={(e) => setReferral(e.target.value)}
          />
        </div> */}
        <div>
          <input
            type="text"
            placeholder="Upi id"
            value={upi}
            onChange={(e) => setUpi(e.target.value)}
          />
        </div>
        <div>
          <select
            className="choice"
            name="country"
            id="country"
            onChange={(e) => setQuestion(e.target.value)}
          >
            <option value="n/a">Select Security Question</option>
            <option value="What is the name of your first pet?">
              What is the name of your first pet?
            </option>
            <option value="What is the name of your high school?">
              What is the name of your high school?
            </option>
            <option value="What is your favorite color?">
              What is your favorite color?
            </option>
            <option value=" What is your birth city?">
              What is your birth city?
            </option>
            <option value="What is your favorite book?">
              What is your favorite book?
            </option>
            <option value="What is your favorite sports team?">
              What is your favorite sports team?
            </option>
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="Answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>
        <div className="topups">
          {console.log(topup)}
          <div
            className={topup === 100 ? 'topup topupBorder' : 'topup'}
            onClick={() => setTopup(100)}
          >
            100
          </div>
          <div
            className={topup === 500 ? 'topup topupBorder' : 'topup'}
            onClick={() => setTopup(500)}
          >
            500
          </div>
          <div
            className={topup === 1000 ? 'topup topupBorder' : 'topup'}
            onClick={() => setTopup(1000)}
          >
            1000
          </div>
        </div>
        <div>
          {' '}
          <input
            type="text"
            placeholder="Referral Code"
            value={referral}
            onChange={(e) => setReferral(e.target.value)}
          />
        </div>
        <div>
          {' '}
          <input
            type="text"
            placeholder="Sub Referral Code"
            value={subreferral}
            onChange={(e) => setSubreferral(e.target.value)}
          />
        </div>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
