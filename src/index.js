import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { TechtronixApp } from './TechtronixApp';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <TechtronixApp />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
