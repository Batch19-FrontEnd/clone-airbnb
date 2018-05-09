import React, { Component } from 'react';
import Axios from 'axios';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import './reservUsuario.css';
import StarRatingComponent from 'react-star-rating-component';
import moment from 'moment';

class ReservUsuario extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ciudad:props.ciudad === null ? "Ciudad no disponible" : props.ciudad,
            checkin:props.checkin === null ? "Fecha no disponible" : moment(props.checkin).format("MMMM D YYYY"),
            checkout:props.checkout === null ? "Fecha no disponible" : moment(props.checkout).format("MMMM D YYYY"),
            guest:props.guest === null ? "No. huespedes no disponible" : props.guest,
            name:props.name === null ? "Nombre no disponible" : props.name,
            rating:props.score === null ? "Evaluación no disponible" : props.score,                           
            foto: props.foto === null ? "http://zazsupercentro.com/wp-content/uploads/2017/07/imagen-no-disponible.png" : props.foto,
        };

    }


    render() {
        return (
                <div>

                    <Card className="col-4">
                        <CardImg top width="100%" src={this.state.foto} alt="Card image cap" />
                        <CardBody>
                            <div className="tituloCiudad">
                                <CardTitle>{this.state.ciudad}</CardTitle>                            
                            </div>
                            <div className="fechasHuespedes">
                                <span>{this.state.checkin}</span>
                                <span>-</span>                                
                                <span>{this.state.checkout}</span>    
                                <span>·</span>                
                                <span>{this.state.guest} huespedes</span>                                
                            </div>
                            <div className="nombreProp">                            
                                <CardSubtitle>{this.state.name}</CardSubtitle>
                            </div>                            
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

export default ReservUsuario;