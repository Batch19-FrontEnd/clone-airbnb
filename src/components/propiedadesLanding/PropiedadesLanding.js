import React, { Component } from 'react';
import Axios from 'axios';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import './PropiedadesLanding.css';
import StarRatingComponent from 'react-star-rating-component';

class PropiedadesLanding extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.nombre,
            pais: props.pais,
            ciudad:props.ciudad,
            foto: props.foto,
            precio: props.precio,
            rating: props.rating
        };

    }

    render() {
        return (
                <div>
                    <Card className="col-3">
                        <CardImg top width="100%" src={this.state.foto} alt="Card image cap" />
                        <CardBody>
                            <div className="tituloCiudad">
                                <CardSubtitle>{this.state.ciudad}</CardSubtitle>
                                <CardSubtitle>·</CardSubtitle>
                                <CardSubtitle>{this.state.pais}</CardSubtitle>                              
                            </div>
                            <CardTitle>{this.state.name}</CardTitle>
                            <CardText>${this.state.precio} por noche</CardText>
                            <div>
                                <StarRatingComponent 
                                name="rate2" 
                                editing={false}
                                starCount={5}
                                value={this.state.rating}/>
                            </div>
                        </CardBody>
                    </Card>
                </div>
        )
    }

}

export default PropiedadesLanding;