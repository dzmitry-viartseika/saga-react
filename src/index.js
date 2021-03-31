import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk  from 'redux-thunk';
import { rootReducer } from "./redux/rootReducer";
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga';
import {sagaWatcher} from "./redux/sagas";

// Provider компонент высшего порядка и оборачиваем приложение


const saga = createSagaMiddleware();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(
            thunk,
            saga
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);


// watcher
saga.run(sagaWatcher);

ReactDOM.render(
  <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
