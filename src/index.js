import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { ConfigureStore } from './store/reducers/configStore'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = ConfigureStore()

ReactDOM.render(
  <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
                  <App />
        </BrowserRouter>
      </Provider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
