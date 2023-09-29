import img1 from '../img/18.jpg';
import img2 from '../img/images2.jpg';
import img3 from '../img/images3.jpg';
import img4 from '../img/images4.jpg';

const initialState = [
  { name: 'Name', price: '100', img: img1, number: 0 },
  { name: 'Name', price: '100', img: img2, number: 0 },
  { name: 'Name', price: '500', img: img3, number: 0 },
  { name: 'Name', price: '500', img: img4, number: 0 },
  { name: 'Name', price: '100', img: img1, number: 0 },
  { name: 'Name', price: '100', img: img2, number: 0 },
  { name: 'Name', price: '500', img: img3, number: 0 },
  { name: 'Name', price: '500', img: img4, number: 0 },
  { name: 'Name', price: '100', img: img1, number: 0 },
  { name: 'Name', price: '100', img: img2, number: 0 },
  { name: 'Name', price: '500', img: img3, number: 0 },
  { name: 'Name', price: '500', img: img4, number: 0 },
];

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      initialState.map((item) => {
        if (item.id === action.payload) {
          item.number++;
        }
        return item;
      });
    default:
      return state;
  }
};

export default dataReducer;
