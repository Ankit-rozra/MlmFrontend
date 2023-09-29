import { createStore, combineReducers } from 'redux';
import contactReducer from './reducers/contactReducer';
import authenticationReducer from './reducers/authenticationReducer';
import cartReducer from './reducers/cartReducer';
import dataReducer from './reducers/dataReducer';
import selfPurchaseReducer from './reducers/selfPurchaseReducer';
const rootReducer = combineReducers({
  authentication: authenticationReducer,
  formData: contactReducer,
  data: dataReducer,
  selfPurchaseReducer: selfPurchaseReducer,
});

const store = createStore(rootReducer);

export default store;
