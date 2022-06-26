import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import AlertTemplate from 'react-alert-template-basic';
import { Provider as AlertProvider } from 'react-alert';
import Modal from 'react-modal';
import { BrowserRouter as Router } from 'react-router-dom';

const alertConfig = {
  position: 'top center',
  timeout: 4000,
};

Modal.setAppElement('#root');

ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...alertConfig}>
      <Router>
        <App />
      </Router>
    </AlertProvider>
  </Provider>,
  document.getElementById('root')
);
