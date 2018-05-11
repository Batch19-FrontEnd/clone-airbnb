import React, { Component } from 'react';
import './Estilos.css';
import { Jumbotron, Button, Row, Col, Input, InputGroup, InputGroupAddon, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Registro from '../../components/Registro/Registro';
import Login from '../../components/login/Login';
import Propiedades from '../propiedadesLanding/PropiedadesLanding';

class Inicio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalRegistro: false,
            modalLogin: false
        };

        this.toggle = this.toggle.bind(this);
        this.toggleLogin = this.toggleLogin.bind(this);
    }

    toggle() {
        this.setState({
            modalRegistro: !this.state.modalRegistro
        });
    }

    toggleLogin() {
        this.setState({
            modalLogin: !this.state.modalLogin
        });
    }

    render() {
        //Necesita regresar un objeto
        return (
            <div>
                <Jumbotron id="PrimeraSeccion">
                    <h1 className="display-3">Esto No es AirBnB ;)</h1>

                    <p className="lead">Porque hakeamos AirBnB. Bueno no, pero esta mas chida nuestra app ;).</p>
                    <form method="post" action="Buscar">
                        <InputGroup>
                            <Input />
                            <InputGroupAddon addonType="append">
                                <Button type="button">Encontrar</Button>
                            </InputGroupAddon >
                        </InputGroup>
                    </form>
                    <hr />

                    <Row>
                        <Col></Col>
                        <Col><Button onClick={this.toggleLogin} color="success">Acceder</Button></Col>
                        <Col><Button onClick={this.toggle} color="primary">Registrarse</Button></Col>
                        <Modal isOpen={this.state.modalRegistro} toggle={this.toggle} className={this.props.className}>
                            <Registro/>
                        </Modal>
                        <Modal isOpen={this.state.modalLogin} toggle={this.toggleLogin} className={this.props.className}>
                            <Login/>
                        </Modal>
                        <Col></Col>
                    </Row>
                </Jumbotron>
            
                <Row>
                    <h4>Nuestras Casas</h4>
                    <Propiedades/>
                </Row>
            </div>
        );
    }
}
//lo unico que voy a exportar
export default Inicio;