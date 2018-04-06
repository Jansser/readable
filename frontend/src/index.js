import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { BrowserRouter } from 'react-router-dom';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = store => next => action => {
  console.log(action.type);
  console.info('dispatching', action);
  
  let result = next(action);
  
  console.log('next state', store.getState());
  console.groupEnd(action.type);
  
  return result;
}

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(logger, thunk)
));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));

registerServiceWorker();
