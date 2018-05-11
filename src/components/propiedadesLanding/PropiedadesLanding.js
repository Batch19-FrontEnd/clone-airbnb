import React, { Component } from 'react';
import Axios from 'axios';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,Col,Row } from 'reactstrap';
import './PropiedadesLanding.css';
import StarRatingComponent from 'react-star-rating-component';



class PropiedadesLanding extends Component {
    constructor(props) {
        super(props)
        this.state = {
            propiedades:[]
        };

    }

    componentWillMount(){
        Axios.get("http://airbnb-cn-b19.herokuapp.com/api/v1/estates/view").then((resp) =>{
            this.setState({propiedades:resp.data})
        }).catch(() => {
        })

    }


    buildCards(){
        return this.state.propiedades.map(
            (propiedad) =>(
                    <Col md="3">
                    <Card style={{marginTop:"10px"}} >
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
                                value={this.state.rating}/>
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