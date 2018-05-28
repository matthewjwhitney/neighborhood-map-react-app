import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
import store from './stores';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

ReactDom.render(
    <Provider store={store.initialize()}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);
registerServiceWorker();
