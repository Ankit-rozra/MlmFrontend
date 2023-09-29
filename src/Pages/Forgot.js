import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TopNav from './TopNav';
import axios from 'axios';
function Forgot() {
  const [email, setEmail] = useState('');
  const [secret_question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [new_password, setNewPassword] = useState('');
  const [confirm_new_password, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  // const users = useSelector((state) => state.authentication.credentials);
  const dispatch = useDispatch();
  const handleLogin = async () => {
    const user = {
      email: email,
      secret_question: secret_question,
      answer: answer,
      new_password: new_password,
      confirm_new_password: confirm_new_password,
    };
    const jsonString = JSON.stringify(user);
    try {
      const response = await axios.put(
        'http://mlmproject.pythonanywhere.com/users/forgetpassword/',
        jsonString
      );

      // Check if the response contains the 'message' field
      if (
        response.data &&
        response.data.message === 'Password updated successfully'
      ) {
        // Handle success (password change successful)
        console.log('Password updated successfully');
      } else {
        // Handle failure (password change failed)
        console.log('Password update failed');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
    // const existingUser = users.find(
    //   (u) =>
    //     u.email === user.email &&
    //     u.question === user.question &&
    //     u.answer === user.answer
    // );

    // if (existingUser) {
    //   return;
    // }
    // dispatch({
    //   type: 'LOGIN',
    //   payload: {
    //     email: email,
    //     question: question,
    //     answer: answer,
    //   },
    // });
    setEmail('');
    setQuestion('n/a');
    setAnswer('');
    setNewPassword('');
    setConfirmPassword('');
  };
  return (
    <div>
      <TopNav display="Login" />
      <div className="Log-form">
        <div>
          <h1>Login</h1>
          <div>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <div>
            <input
              type="text"
              placeholder="New Password"
              value={new_password}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Confirm New Password"
              value={confirm_new_password}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div>
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
