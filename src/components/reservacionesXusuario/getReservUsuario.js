import React, { Component } from 'react';
import Axios from 'axios';
import {CardDeck } from 'reactstrap';
import ReservUsuario from './reservUsuario';

class GetReservUsuario extends Component {
    constructor(props){
        super(props)
        this.state = {
            reserv: {},
            listReserv: null,
            reservVacia:""
        }
        
    }

    componentWillMount() {
        //Aqui se hacen peticiones a una API

        //Token de prueba que no tiene reservas registradas
        Axios.get('https://airbnb-cn-b19.herokuapp.com/api/v1/traveler/bookings',{headers: {"Authorization" : "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjEsImVtYWlsIjoicHJ1ZWJhQGdtYWlsLmNvbSIsIm5hbWUiOiJQcnVlYmEgUHJ1ZWJhIiwiZXhwIjoxNTI1OTI1MTg3LCJpYXQiOjE1MjU4Mzg3ODd9.8sXiL-pvD4pcqqcUoD6s44_nKAEIfEWWIEjkuc4e5uo"}})
            .then(Response =>{
                let reserv = Response.data
                this.setState({reserv})

                let listReserv = this.state.reserv.map(element => <ReservUsuario ciudad={element.Estate.Address.ciudad} checkin={element.checkin} checkout={element.checkout} guest={element.guest} name={element.Estate.estate_name} score={element.score} foto={element.foto}/>)  

                this.setState({listReserv}) 
                
                if (this.state.reserv.length == 0) {
                let reservVacia = <span>No existen reservas</span>
                this.setState({reservVacia})
                }
                
                
            })
            .catch(Error => console.log(Error));
    }

    render() {
        console.log(this.state.reserv.length)

        return (
            <CardDeck>
                {this.state.reservVacia}
                {this.state.listReserv}
            </CardDeck>
        ) 

    }

}

export default GetReservUsuario;