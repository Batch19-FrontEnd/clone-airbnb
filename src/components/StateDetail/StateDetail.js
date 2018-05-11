import React, { Component } from 'react';
import './stateDetail.css';
import { Col, Button, Form, FormGroup, Label, Input, FormText, Container, Row } from 'reactstrap';
import axios from 'axios';
import FaIconPack from 'react-icons/lib/fa'
import FaBed from 'react-icons/lib/fa/bed';
import MdWc from 'react-icons/lib/md/wc';
import MdKitchen from 'react-icons/lib/md/kitchen';
import IoBonfire from 'react-icons/lib/io/bonfire';
import MdLiveTv from 'react-icons/lib/md/live-tv';
import IoAndroidCar from 'react-icons/lib/io/android-car';
import IoWifi from 'react-icons/lib/io/wifi';


//import para  traer el componenet raiz de react

//Se crea clase con  mismo nombre que componente
class StateDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      detail: {},
      services: [],
      config: {
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
      }
    }
    //this.services = [];
  }


  componentWillMount() {
    axios.get('https://airbnb-cn-b19.herokuapp.com/api/v1/estates/7')
      .then(Response => {
        let detail = Response.data;
        console.log(detail.Service["id"])
        this.setState({
          detail: detail
        });
        // console.log('detail:', this.state);
        let services = Response.data.Service;
        this.setState({
          services: services
        });
      });

  }

  buildServices(data) {
    // console.log('buildServices: ', data[0]);

  }



  render() {
    //Necesita regresar un objeto
    console.log("Soy un render")
    console.log(this.state.services)

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
          <hr />
          <Row>
            <Col>
              <h3>Camas <FaBed /> {this.state.services.id}</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Baños <MdWc /> {this.state.services.id}</h3>
            </Col>
          </Row>

          {this.state.services.refri && (
            <Row>
              <Col>
                <h3>Refrigerador <MdKitchen /> {this.state.services.refri}</h3>
              </Col>
            </Row>
          )}
          {this.state.services.estufa && (
            <Row>
              <Col>
                <h3>Estufa <IoBonfire /> {this.state.services.estufa}</h3>
              </Col>
            </Row>
          )}
          {this.state.services.tv && (
            <Row>
              <Col>
                <h3>TV <MdLiveTv /> {this.state.services.tv}</h3>
              </Col>
            </Row>
          )}
          {this.state.services.parking && (
            <Row>
              <Col>
                <h3>Estacionamiento <IoAndroidCar /> {this.state.services.parking}</h3>
              </Col>
            </Row>
          )}
          {this.state.services.wifi && (
            <Row>
              <Col>
                <h3>Wifi <IoWifi /> {this.state.services.wifi}</h3>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    );
  }

}
//lo unico que voy a exportar
export default StateDetail;
