import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../Css/Cards.css';
function Cards() {
  const [productData, setProductData] = useState(null);
  // const state = useSelector((state) => state.data);
  // const dispatch = useDispatch();
  // function handleAddToCart(id) {
  //   dispatch({
  //     type: 'ADD_TO_CART',
  //     payload: id,
  //   });
  // }
  useEffect(() => {
    // Function to fetch the data using Axios and store it in the state
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://mlmproject.pythonanywhere.com/product_details/1/'
        );
        setProductData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the function to fetch data when the component mounts
    fetchData();

    // No need for a cleanup function as we don't have any ongoing tasks
  }, []);
  return (
    <div>
      {productData ? (
        <div>
          <h2>{productData.product_name}</h2>
          <p>Price: ${productData.product_price}</p>
          <p>Description: {productData.product_description}</p>
          <img src={productData.product_image} alt={productData.product_name} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
  // return (
  //   <div className="container">
  //     {state.map((item, index) => (
  //       <div className="card" key={index}>
  //         <img src={item.img} alt={item.name} className="card-image" />
  //         <div className="card-details">
  //           <p className="card-name">{item.name}</p>
  //           <p className="card-price">{item.price}</p>{' '}
  //           <button
  //             className="card-button"
  //             onClick={() => handleAddToCart(item.id)}
  //           >
  //             Add to Cart
  //           </button>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // );
}

export default Cards;
