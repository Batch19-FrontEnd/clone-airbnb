import React, { Component } from 'react';
import Axios from 'axios';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Col, Row } from 'reactstrap';
import './PropiedadesLanding.css';
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom'




class PropiedadesLanding extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.nombre === null ? "Nombre no disponible" : props.nombre,
            pais: props.pais === null ? "Pais no disponible" : props.pais,
            ciudad: props.ciudad === null ? "Ciudad no disponible" : props.ciudad,
            foto: props.foto === null ? "http://zazsupercentro.com/wp-content/uploads/2017/07/imagen-no-disponible.png" : props.foto,
            precio: props.precio === null ? "Precio no disponible" : props.precio,
            rating: props.rating === null ? 0 : props.rating,
            id: props.id === null ? 0 : props.id,
            propiedades: []

        };

    }

    componentWillMount() {
        Axios.get("http://airbnb-cn-b19.herokuapp.com/api/v1/estates/view").then((resp) => {
            this.setState({ propiedades: resp.data })
        }).catch(() => {
        })

    }


    buildCards() {
        console.log(this.state.propiedades)
        return this.state.propiedades.map(
            (propiedad) => (
                <Col md="3">
                    <Card style={{ marginTop: "10px" }} >
                        <CardImg top width="100%" height="200" src={propiedad.photos !== null ? propiedad.photos[0] : ""
                        } alt="Card image cap" />
                        <CardBody>
                            <div className="tituloCiudad">
                                <CardSubtitle>{propiedad.Address.estado}</CardSubtitle>
                                <CardSubtitle>·</CardSubtitle>
                                <CardSubtitle>{propiedad.Address.pais}</CardSubtitle>
                            </div>
                            <CardTitle>{propiedad.estate_name}</CardTitle>
                            <CardText>${propiedad.price} por noche</CardText>
                            <div>
                                <StarRatingComponent
                                    name="rate2"
                                    editing={false}
                                    starCount={5}
                                    value={this.state.rating} />
                            </div>
                            <div>

                                    <Link color="danger" to={'estateDetail/' + propiedad.id}>Detalles</Link>

                            </div>
                        </CardBody>
                    </Card>
                </Col>
            )
        )
    }


    render() {
        return (
            <Row>

                {this.buildCards()}
            </Row>

        )
    }

}

export default PropiedadesLanding;