import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app.js';
import { GlobalContextComponent } from './global_context/global_context.js';

ReactDOM.render(
    <BrowserRouter>
        <GlobalContextComponent>
            <App />
        </GlobalContextComponent>
    </BrowserRouter>,
    document.getElementById('root')
)