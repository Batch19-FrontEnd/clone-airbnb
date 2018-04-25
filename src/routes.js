/*Dependencias*/
import React from 'react';
import {Route, Switch} from 'react-router-dom';

/*Componentes*/
import App from './App';
import Inicio from './components/Landing Page/Inicio';
import Nvar from './components/Nvar/Nvar';
import Registro from './components/Registro/Registro';
import Login from './components/login/Login';
import Profile from './components/Profile/Profile';

const AppRoutes = () => 
    <App>
        <Switch>
            <Route path="/" component= {Inicio} />
            <Route path="/Registro" component={Registro}/>
            <Route path="/Login" component={Login}/>
            <Route path="/Profile" component={Profile}/>
        </Switch>
    </App>

export default AppRoutes;