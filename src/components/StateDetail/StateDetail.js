import React, { Component } from 'react';
import './stateDetail.css';
import { Col, Button, Form, FormGroup, Label, Input, FormText, Container, Row } from 'reactstrap';
import axios from 'axios';

//import para  traer el componenet raiz de react

//Se crea clase con  mismo nombre que componente
class StateDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      detail: {},
      config: {
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
      }
    }
  }


  componentWillMount() {
    axios.get('https://airbnb-cn-b19.herokuapp.com/api/v1/estates/7')
      .then(Response => {
        let detail = Response.data;
        console.log('detail:', detail);

        this.setState({ detail });
      });

  }

  render() {
    //Necesita regresar un objeto
    return (
      <div className="detail">
        <Container>
          <Row>
            <Col sm="12">
              <h2>{this.state.detail.estate_name}</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>{this.state.detail.description}</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>$ {this.state.detail.price}</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              {this.state.detail.available == true && (
                <h4>Disponible</h4>
              )}
              {this.state.detail.available == false && (
                <h4>No disponible</h4>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

}
//lo unico que voy a exportar
export default StateDetail;
