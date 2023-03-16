import React from 'react';
import ReactDOM from 'react-dom/client';
 import { applyMiddleware, createStore } from 'redux';
import App from './App';
import rootReducer from './Reducers/Index';
import { Provider } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";
 import { BrowserRouter } from 'react-router-dom';
 import thunk from 'redux-thunk';
   const middleware = [thunk];
 const store = createStore(
   rootReducer,
   composeWithDevTools(applyMiddleware(...middleware))
 );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
  <App />
      </BrowserRouter>
    
    </Provider>
  </React.StrictMode>
);