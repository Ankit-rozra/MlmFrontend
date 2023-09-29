const initialState = {
  selectedOption: '',
};
const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_OPTION':
      return {
        selectedOption: action.payload,
      };
    default:
      return state;
  }
};

export default navReducer;
