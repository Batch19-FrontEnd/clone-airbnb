import React, { Component } from 'react';
import './Estilos.css';
import { Jumbotron, Button, Row, Col, Input, InputGroup, InputGroupAddon, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Registro from '../../components/Registro/Registro';

class Inicio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalRegistro: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modalRegistro: !this.state.modalRegistro
        });
    }

    componentWillMount() {
        //Aqui se hacen peticiones a una API
    }

    componentWillReceiveProps() {
        //Si el componente padre pasa props despues de renderear
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
                        <Col><Button href="Login" color="success">Acceder</Button></Col>
                        <Col><Button onClick={this.toggle} color="primary">Registrarse</Button></Col>
                        <Modal isOpen={this.state.modalRegistro} toggle={this.toggle} className={this.props.className}>
                            <Registro/>
                        </Modal>
                        <Col></Col>
                    </Row>
                </Jumbotron>
                <img className="img img-responsive" alt="LOGO" width="200px" height="100px" src="logo.png" />
                <img className="img img-responsive" alt="LOGO" width="200px" height="100px" src="http://www.resetmx.reviews/wp-content/uploads/2017/09/default.png" />
            </div>
        );
    }
}
//lo unico que voy a exportar
export default Inicio;