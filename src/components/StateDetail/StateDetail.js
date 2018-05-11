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
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div><img src={"https://cdn1.iconfinder.com/data/icons/google_jfk_icons_by_carlosjj/256/places.png"} /></div>;

//import para  traer el componenet raiz de react

//Se crea clase con  mismo nombre que componente
class StateDetail extends Component {

  constructor(props) {
    super(props);
    props.params;
    this.state = {
      detail: {},
      services: [],
      address: [],
      config: {
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
      },
      center: [],
      zoom: 15
    }
    //this.services = [];
    
  }


  componentWillMount() {
    console.log('props: ', this.props.match.params.value);
    
    let idEstate = this.props.match.params.value; // valor hardcode
    axios.get('https://airbnb-cn-b19.herokuapp.com/api/v1/estates/' + idEstate)
      .then(Response => {
        let detail = Response.data;

        this.setState({
          detail: detail
        });
        let services = Response.data.Service;
        let address = Response.data.Address;
        let center = {
          data: {
            lat: detail.Address["lat"],
            lng: detail.Address["long"]
          }
        };
        this.setState({
          services: services
        });
        this.setState({
          address: address
        });
        this.setState({
          center: center.data
        });



      });

  }

  buildServices(data) {

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
          <br />
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
        {this.state.center.lat && (
          <div className="map" style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: 'AIzaSyCemtRYjj9VxgYotLHMVbZm9HqluRo2zHk',
                language: 'es'
              }}
              defaultCenter={this.state.center}
              defaultZoom={this.state.zoom}
            >
              <AnyReactComponent
                lat={this.state.address.lat}
                lng={this.state.address.long}
                text={'hector'}
              />
            </GoogleMapReact>
          </div>
        )}

      </div>


    );
  }

}
//lo unico que voy a exportar
export default StateDetail;
