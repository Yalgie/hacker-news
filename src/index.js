import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './components/App';

ReactDOM.render(
    <Provider store={store}>
        <CssBaseline />
        <App />
    </Provider>, 
    document.getElementById('root')
);
