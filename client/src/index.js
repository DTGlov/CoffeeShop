import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AnimatePresence } from "framer-motion";


//Provider keeps track of the global store and allows us to us access to the store in any part of the app
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers'

import App from './App';

const store = createStore(reducers,compose(applyMiddleware(thunk)))


ReactDOM.render(
  <React.StrictMode>
    <AnimatePresence exitBeforeEnter>
      <Provider store={store}>
        <App />
      </Provider>
    </AnimatePresence>
  </React.StrictMode>,
  document.getElementById("root")
);

