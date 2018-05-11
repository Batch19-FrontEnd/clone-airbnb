import React, { Component } from 'react';
import Axios from 'axios';
import { } from 'reactstrap';
import PropiedadesLanding from './PropiedadesLanding';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardGroup, Button, CardDeck, CardColumns } from 'reactstrap';


class GetPropLanding extends Component {
    constructor(props) {
        super(props)
        this.state = {
            propied: {},
            listPropied: null
        }

    }


    componentWillMount() {
        //Aqui se hacen peticiones a una API
        Axios.get('https://airbnb-cn-b19.herokuapp.com/api/v1/estates/view')
            .then(Response => {
                let propied = Response.data
                this.setState({ propied })
                let listPropied = this.state.propied.map(element => <PropiedadesLanding nombre={element.estate_name} pais={element.Address.pais} ciudad={element.Address.ciudad} foto={element.photos} precio={element.price} rating={element.score} />)

                this.setState({ listPropied })

            })
            .catch(Error => console.log(Error));
    }

    render() {

        console.log(this.state.propied)

        return (
            <div>
                <CardColumns>
                            {this.state.listPropied}
                </CardColumns>
            </div>
        )

    }

}


export default GetPropLanding;