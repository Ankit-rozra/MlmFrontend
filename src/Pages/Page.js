import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import ProductScreen from './Product';
import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';
import Login from './Login';
import Register from './Register';
import RewardScreen from './RewardScreen';
import Network from './Network';
import Cart from './Cart';
import Notification from './Notification';
import Profile from './Profile';
import Forgot from './Forgot';
import OrderScreen from './OrderScreen';
import '../Css/Main.css';
import VNavbar from './VNavbar';
import OrderRequest from './OrderRequest';
import RewardRequest from './RewardRequest';
import RegisterRequest from './RegisterRequest';
import ServiceRequest from './ServiceRequest';
import Edit from './Edit';
function Page() {
  return (
    <Router>
      <div className="dashboard-container">
        <VNavbar />
        <div className="con">
          <Routes>
            <Route path="/notification" element={<Notification />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/products" element={<ProductScreen />} />
            <Route path="/rewards" element={<RewardScreen />} />
            <Route path="/network" element={<Network />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/contact" element={<ContactScreen />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<OrderScreen />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/requestOrder" element={<OrderRequest />} />
            <Route path="/requestReward" element={<RewardRequest />} />
            <Route path="/requestRegister" element={<RegisterRequest />} />
            <Route path="/requestService" element={<ServiceRequest />} />
            <Route path="/edit" element={<Edit />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Page;
