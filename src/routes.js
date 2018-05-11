/*Dependencias*/
import React from 'react';
import {Route, Switch} from 'react-router-dom';

/*Componentes*/
import App from './App';
import Profile from './components/Profile/Profile';
import Reservation from './components/Reservation/Reservation';
import GetReservUsuario from './components/reservacionesXusuario/getReservUsuario';
import GetPropLanding from './components/propiedadesLanding/GetPropLanding';
import Evaluacion from './components/evaluacion/evaluacion';
import CreateProperty from './components/CreateProperty/CreateProperty';
import Page404 from './components/Page404/Page404';
import StateDetail from './components/StateDetail/StateDetail';
import Login from './components/login/Login';


const AppRoutes = () =>
    <App>
        <Switch>
            <Route path="/Profile" component={Profile}/>
            <Route path="/Reservation" component={Reservation}/>
            <Route path="/GetReservUsuario" component={GetReservUsuario}/>
            <Route path="/GetPropLanding" component={GetPropLanding}/>
            <Route path="/Evaluacion" component={Evaluacion}/>
            <Route path="/CreateProperty" component={CreateProperty}/>
            <Route path="/estateDetail/:value" component={StateDetail}/>
            <Route path="/login" component={Login}/>
            <Route component={Page404}/>
        </Switch>
    </App>

export default AppRoutes;