import React, { Component } from 'react';
import './reservation.css';
import { Col, Button, Form, FormGroup, Label, Input, FormText, Container, Row } from 'reactstrap';
import axios from 'axios';

//import para  traer el componenet raiz de react

//Se crea clase con  mismo nombre que componente
class Reservation extends Component{

  constructor(props){
    super(props);
    this.state = {
      reservation: {},
      estateHouse: {},
      config: {
        headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
      }
    }
    
  }

    
  componentWillMount() {
    axios.get('https://airbnb-cn-b19.herokuapp.com/api/v1/users/booking/1', this.state.config)
      .then(Response => {
          let reservation = Response.data
          this.setState({reservation});
          let estateHouse = reservation.Estate
          this.setState({estateHouse})
          console.log("reservacion");
          console.log(reservation)
          //console.log(this.state.reservation.Estate.estate_name)
    });
    
  }



    render() {
        //Necesita regresar un objeto
          //console.log(this.state.reservation.Estate.estate_name)
        //console.log(this.state.reservation.Estate)
        return (
            <div>
                <Container>
                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                          <h1>Datos de tu reservación:</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                          <p>Número de ocupantes: {this.state.reservation.guest}</p>
                          
                          <p>Check-in: {this.state.reservation.checkin}</p>
                          <p>Check-out: {this.state.reservation.checkout}</p>
                          <p>Precio: {this.state.reservation.totalprice}</p>
                          <p>Calificación: {this.state.reservation.score}</p>
                        </Col>
                    </Row>
                    <Row>
                      <Col sm="12" md={{ size: 8, offset: 2 }}>
                          <h1>Datos del lugar:</h1>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <h3>{this.state.estateHouse.estate_name}</h3>
                        <p>{this.state.estateHouse.description}</p>
                        <p>Calificación: {this.state.estateHouse.score}</p>
                        <p>{this.state.estateHouse.address}</p>
                        <p>Servicios</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <h1>Datos del propietario:</h1>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <p>Nombre concatenado</p>
                        <p>Correo</p>
                        <p>Teléfono</p>
                      </Col>
                    </Row>
                </Container>
            </div> 
        );
    }

}
//lo unico que voy a exportar
export default Reservation;
