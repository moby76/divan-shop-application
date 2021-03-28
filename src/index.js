import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { SoftFurState } from './context/SoftFur/SoftfurState'
import reportWebVitals from './reportWebVitals';
import { TermsState } from './context/Terms/termsState';
import { AlertState } from './context/alert/alertState';

ReactDOM.render(
  // <React.StrictMode>
  <AlertState>
  <TermsState>
  <SoftFurState>
      <App />
  </SoftFurState>
  </TermsState>
  </AlertState>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
