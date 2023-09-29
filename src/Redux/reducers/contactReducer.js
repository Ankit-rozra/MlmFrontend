const initialState = {
  name: '',
  email: '',
  message: '',
  values: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };

    case 'SET_EMAIL':
      return { ...state, email: action.payload };

    case 'SET_MESSAGE':
      return { ...state, message: action.payload };

    case 'ADD_VALUE':
      console.log(state.values);
      return {
        ...state,
        values: [...state.values, action.payload],
      };

    default:
      return state;
  }
};

export default reducer;
