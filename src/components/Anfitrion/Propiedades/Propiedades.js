import React, { Component } from 'react';
import Axios from 'axios';
import { CardDeck, Jumbotron, Button } from 'reactstrap';
import TarjetaPropiedad from './TarjetaPropiedad';


class Propiedades extends Component {
    constructor(props) {
        super(props)
        this.state = {
            config: {
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
            },
            propied: {},
            listPropied: null
        }
    }


    componentWillMount() {
        //Aqui se hacen peticiones a una API
        Axios.get('https://airbnb-cn-b19.herokuapp.com/api/v1//estates/user', this.state.config)
            .then(Response => {
                let propied; 
                let listPropied;

                propied = Response.data
                this.setState({ propied })

                listPropied = this.state.propied.map(element => <TarjetaPropiedad id={element.id} nombre={element.estate_name} pais={element.Address.pais} ciudad={element.Address.ciudad} foto={element.photos} precio={element.price} rating={element.score} />)
                this.setState({ listPropied })

            })
            .catch(Error => console.log("Se ha generado un error:" + Error));
    }

    render() {

        console.log(this.state.propied)

        return (
            <div>
                <Jumbotron>
                    <h1>Tus propiedades</h1>
                    <Button>Agregar Propiedad</Button>
                    <div>
                        <CardDeck>
                            {this.state.listPropied}
                        </CardDeck>
                    </div>
                </Jumbotron>
            </div>
        );

    }

}

export default Propiedades;