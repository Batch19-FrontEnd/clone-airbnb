import React, { Component } from 'react';
import {
    Jumbotron
} from 'reactstrap';

class DetallesReservacion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            config: {
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
            }
        }
    }

    render() {
        return (
            <Jumbotron className="p-5">
                <h2 className="text-white">Detalles de la reservación</h2>
                <div className="p-5">
                    Aqui estaran los detalles de la reservación
                </div>
            </Jumbotron>
        );
    }
}

export default DetallesReservacion;
