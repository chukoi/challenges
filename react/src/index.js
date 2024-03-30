import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

document.body.innerHTML = '<div id=\'root\'></div>';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
  <BrowserRouter><App/></BrowserRouter></React.StrictMode>);

