import React from 'react';
import TopNav from './TopNav';
import { useSelector } from 'react-redux';
function Cart() {
  const state = useSelector((state) => state.cart);
  return (
    <div>
      <TopNav display="Cart" />
    </div>
  );
}

export default Cart;
