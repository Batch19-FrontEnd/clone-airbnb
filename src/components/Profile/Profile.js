import React, { Component } from 'react';
import './profile.css';
import { Col, Button, Form, FormGroup, Label, Input, FormText, Container, Row } from 'reactstrap';
import axios from 'axios';

//import para  traer el componenet raiz de react

//Se crea clase con  mismo nombre que componente
class Profile extends Component{

  constructor(props){
    super(props);
    this.state = {
      user: {},
      config: {
        headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    
  componentWillMount() {
    axios.get('https://airbnb-cn-b19.herokuapp.com/api/v1/users/profile', this.state.config)
      .then(Response => {
          let user = Response.data
          this.setState({user});
    });
    console.log("desde mount");
    
  }

  handleSubmit(e) {      
    axios.put('https://airbnb-cn-b19.herokuapp.com/api/v1/users/profile', this.state.user, this.state.config)
       .then(Response => {
            console.log(Response);
        });
      
  }

  componentWillReceiveProps(){
      //Si el componente padre pasa props despues de renderear
  }

  onProfileChange(value){
    
    let primerNombre = Object.assign({}, this.state.user);
    primerNombre.first_name = value
    console.log("primer nombre es");
    console.log(primerNombre);
    this.setState({
      user: {
        first_name: value
      }
    });
  }


    render() {
        //Necesita regresar un objeto
        return (
            <div>
                <Container>
                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <h1>Perfil</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                  <Label for="name" sm={2}>Nombre</Label>
                                  <Col sm={10}>
                                    <Input type="text" name="name" id="name" placeholder="Nombre" value={this.state.user.first_name} onChange={e => this.onProfileChange(e.target.value)} />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="lastname" sm={2}>Apellido</Label>
                                  <Col sm={10}>
                                    <Input type="text" name="lastname" id="lastname" placeholder="Apellido" value={this.state.user.lastname} />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="exampleEmail" sm={2}>Correo electrónico</Label>
                                  <Col sm={10}>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="Correo electrónico" value={this.state.user.email} />
                                  </Col>
                                </FormGroup>
                                
                                <FormGroup row>
                                  <Label for="telephone" sm={2}>Teléfono</Label>
                                  <Col sm={10}>
                                    <Input type="text" name="telephone" id="telephone" placeholder="Teléfono" value={this.state.user.phone_number} />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="description" sm={2}>Descripción</Label>
                                  <Col sm={10}>
                                    <Input type="text" name="description" id="description" placeholder="Descripción" value={this.state.user.description} />
                                  </Col>
                                </FormGroup>
                                <FormGroup check row>
                                  <Col sm={{ size: 2, offset: 10 }}>
                                    <Button>Submit</Button>
                                  </Col>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div> 
        );
    }

}
//lo unico que voy a exportar
export default Profile;
