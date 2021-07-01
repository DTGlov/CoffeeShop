import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { AnimatePresence } from "framer-motion";

ReactDOM.render(
  <React.StrictMode>
    <AnimatePresence exitBeforeEnter>
      <App />
    </AnimatePresence>
  </React.StrictMode>,
  document.getElementById("root")
);

