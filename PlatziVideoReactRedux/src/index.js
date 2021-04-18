import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './routes/App';

// El provider dará la conexión a toda la aplicación
ReactDOM.render(
    <Provider>
        <App />
    </Provider>
    ,
    document.getElementById('app'));