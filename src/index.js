import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFlag, faFaceFrown, faFaceSmile, faX, faBars } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
library.add(faSquareFacebook, faLinkedinIn, faFlag, faFaceFrown, faFaceSmile, faX, faBars)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
