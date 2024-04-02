import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import reducer,{initialState} from "./components/utils/reducer"
import { StateProvider } from './components/utils/StateProvider';
import { ToastContainer} from 'react-toastify';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
      <App />
      <ToastContainer/>
      </Router>
    </StateProvider>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

