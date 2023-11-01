import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import store from 'redux/store';

const root = document.getElementById('root');
const rootContainer = ReactDOM.createRoot(root);
rootContainer.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
