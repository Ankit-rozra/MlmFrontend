const initialState = {
  data: [], // Initial empty array for data
};

const selfPurchaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELF_PURCHASE_DATA':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default selfPurchaseReducer;
