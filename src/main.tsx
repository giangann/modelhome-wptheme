import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './libs/atom/lang/translations/i18n';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root'),
);
