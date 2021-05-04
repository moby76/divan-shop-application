import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import App from './App';
import { SoftFurState } from './context/SoftFur/SoftfurState'
import reportWebVitals from './reportWebVitals';
import { TermsState } from './context/Terms/termsState';
import { AlertState } from './context/alert/alertState';
// import { PaginationContext } from './context/pagination/paginationContext';
import { PaginationState } from './context/pagination/paginationState';




import SimpleReactLightbox from 'simple-react-lightbox'
import { ModalState } from './context/modal/modalState';
import ShopsState from './context/shops/shopsState';


ReactDOM.render(
  // <React.StrictMode>
  <ShopsState>
    <ModalState>
      <PaginationState>
        <AlertState>
          <TermsState>
            <SoftFurState>
              <SimpleReactLightbox>
                <App />
              </SimpleReactLightbox>
            </SoftFurState>
          </TermsState>
        </AlertState>
      </PaginationState>
    </ModalState>
  </ShopsState>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
