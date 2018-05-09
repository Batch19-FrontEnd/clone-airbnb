import React, { Component } from 'react';
import Axios from 'axios';
import {Button, Form} from 'reactstrap';
import './evaluacion.css';
import StarRatingComponent from 'react-star-rating-component';

class Evaluacion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rating: 0,
            estrellas:1
        };

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event) {
        event.preventDefault();
        this.evaluarProp(this.state.estrellas)
    }

    evaluarProp(evaluacion){
        console.log("evaluando",evaluacion)
    //     Axios.post('url', evaluacion)
    //         .then(Response => console.log(Response))
    //         .catch(Error => console.log(Error));
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
        let estrellas = nextValue
        this.setState({estrellas})
    }

    render() {

        const { rating } = this.state;

        return (
            <Form onSubmit={this.handleSubmit} className="evaluacion">
                <h2>Completa tu evaluación:</h2>
                <span>¿Cómo estuvo tu estadia en la casa de "Nombre de Anfitrion"?</span>
                <div>
                    <StarRatingComponent
                        name="evaluacion"
                        starCount={5}
                        value={rating}
                        onStarClick={this.onStarClick.bind(this)}
                    />
                    <h5>Evaluación: {rating}/5</h5>        
                </div>
                <Button color="danger" type="submit">Evaluar propiedad</Button>
            </Form>
        )
    }

}

export default Evaluacion;