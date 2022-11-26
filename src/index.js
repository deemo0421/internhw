import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {DetailProvider} from './global/detailContext'


ReactDOM.render(
  <React.StrictMode>
    <DetailProvider>
      <App />
    </DetailProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


