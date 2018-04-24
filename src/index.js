/*Dependencias*/
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';

/*Rutas*/
import AppRoutes from './routes';

/*Estilos*/
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <BrowserRouter>
        <AppRoutes/>
    </BrowserRouter>,
    document.getElementById('root')
);

registerServiceWorker();
