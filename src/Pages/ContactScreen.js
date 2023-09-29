import React, { useState } from 'react';
import TopNav from './TopNav';
import '../Css/Contact.css';
import '../Css/Log.css';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
function ContactScreen() {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const feedbackData = {
      username: username, // Assuming the "name" field is for the email (you can change this accordingly)
      message: message,
    };
    const jsonString = JSON.stringify(feedbackData);
    try {
      const response = await axios.post(
        'http://mlmproject.pythonanywhere.com/contact/',
        jsonString
      );

      // Check if the response contains the 'message' field
      if (
        response.data &&
        response.data.message === 'Feedback saved successfully'
      ) {
        // Handle success (feedback submission successful)
        console.log('Feedback saved successfully');
      } else {
        // Handle failure (feedback submission failed)
        console.log('Feedback submission failed');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }

    // dispatch({
    //   type: 'SET_NAME',
    //   payload: name,
    // });
    // dispatch({
    //   type: 'SET_MESSAGE',
    //   payload: message,
    // });
    // dispatch({
    //   type: 'ADD_VALUE',
    //   payload: {
    //     name: name,

    //     message: message,
    //   },
    // });
    setUsername('');
    setMessage('');
  };
  const state = useSelector((state) => state.formData.values);
  return (
    <div>
      <div className="about">
        <TopNav display="Contact us" />
        <div>
          <div className="companyName">Contact us</div>
          <div className="contactMid">
            <div className="companyContact">
              <span>Phone no. - </span> <span>+91jfkjsdbfsvx</span>
            </div>
            <div className="companyContact">
              <span>Email - </span> <span>support@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="Log-form">
          <h1>Contact Form</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                className="field"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <input
                className="field"
                type="text"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
          {/* <div>
            <h2>Your Information</h2>
            <div>
              {state.map((value) => (
                <div key={value.id}>
                  {value.name} {value.email} {value.message}
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ContactScreen;
