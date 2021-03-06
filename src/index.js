import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import myReducer from './reducers/index'



import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

const store= createStore(myReducer,composeWithDevTools());


ReactDOM.render(
  <React.StrictMode>
   
   <Provider store={store}>
      <App />
   </Provider>
   
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
