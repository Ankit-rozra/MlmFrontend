const initialState = {
  isLoggedIn: false,
  credentials: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      // const user = action.payload;
      // const existingUser = state.credentials.find(
      //   (u) => u.username === user.username && u.password === user.password
      // );
      // if (existingUser) {
      //   return {
      //     ...state,
      //     isLoggedIn: true,
      //   };
      // } else {
      //   return {
      //     ...state,
      //     isLoggedIn: false,
      //   };
      // }
      return {
        ...state,
        isLoggedIn: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
      };
    case 'SIGNUP':
      return {
        ...state,
        credentials: [...state.credentials, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
