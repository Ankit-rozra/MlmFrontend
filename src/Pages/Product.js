import React from 'react';
import TopNav from './TopNav';
import '../Css/Product.css';
import Cards from '../Components/Cards';
function ProductScreen() {
  return (
    <div className="imgDiv">
      <TopNav display="Products" />
      <Cards />
    </div>
  );
}

export default ProductScreen;
