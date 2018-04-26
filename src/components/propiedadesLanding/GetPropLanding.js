import React, { Component } from 'react';
import Axios from 'axios';
import { } from 'reactstrap';
import PropiedadesLanding from './PropiedadesLanding';

class GetPropLanding extends Component {

    render() {
        let propiedades = [
            {
                "id": 1,
                "estate_name": "Casa bonita en la Roma",
                "description": "Esta casa es muy bonita he iluminada",
                "score": 5,
                "price": "1200",
                "available": true,
                "photos":"https://a0.muscache.com/im/pictures/6722906/b4bc6418_original.jpg?aki_policy=xx_large",
                "createdAt": "2018-04-24T01:19:29.645Z",
                "updatedAt": "2018-04-24T01:19:29.645Z",
                "Address": {
                    "id": 1,
                    "calle": "Av. Alvaro Obregon",
                    "num_ext": "168",
                    "num_int": "2",
                    "colonia": "Roma Norte",
                    "ciudad": "Cuauhtemoc",
                    "estado": "Mexico City",
                    "pais": "Mexico",
                    "cp": 33400,
                    "lat": 19.333333333,
                    "long": null,
                    "ref": "",
                    "createdAt": "2018-04-24T01:19:30.498Z",
                    "updatedAt": "2018-04-24T01:19:30.498Z",
                    "EstateId": 1
                }
            },
            {
                "id": 2,
                "estate_name": "Casa bonita en la Roma",
                "description": "Esta casa es muy bonita he iluminada",
                "score": 4,
                "price": "1200",
                "available": true,
                "photos": "https://a0.muscache.com/im/pictures/6716233/9fc13de9_original.jpg?aki_policy=x_large",
                "createdAt": "2018-04-24T01:20:28.367Z",
                "updatedAt": "2018-04-24T01:20:28.367Z",
                "Address": {
                    "id": 2,
                    "calle": "Av. Alvaro Obregon",
                    "num_ext": "168",
                    "num_int": "2",
                    "colonia": "Roma Norte",
                    "ciudad": "Cuauhtemoc",
                    "estado": "Mexico City",
                    "pais": "Mexico",
                    "cp": 33400,
                    "lat": 19.333333333,
                    "long": null,
                    "ref": "",
                    "createdAt": "2018-04-24T01:20:28.443Z",
                    "updatedAt": "2018-04-24T01:20:28.443Z",
                    "EstateId": 2
                }
            },
            {
                "id": 3,
                "estate_name": "Casa bonita en la Roma 2",
                "description": "Esta casa es muy bonita he iluminada x2",
                "score": 5,
                "price": "1200",
                "available": true,
                "photos": "https://a0.muscache.com/im/pictures/6715226/5c898f25_original.jpg?aki_policy=x_large",
                "createdAt": "2018-04-24T01:26:46.568Z",
                "updatedAt": "2018-04-24T01:26:46.568Z",
                "Address": {
                    "id": 3,
                    "calle": "Av. Alvaro Obregon",
                    "num_ext": "168",
                    "num_int": "2",
                    "colonia": "Roma Norte",
                    "ciudad": "Cuauhtemoc",
                    "estado": "Mexico City",
                    "pais": "Mexico",
                    "cp": 33400,
                    "lat": 19.333333333,
                    "long": null,
                    "ref": "",
                    "createdAt": "2018-04-24T01:26:47.190Z",
                    "updatedAt": "2018-04-24T01:26:47.190Z",
                    "EstateId": 3
                }
            },
            {
                "id": 7,
                "estate_name": "Casa bonita en la Roma 6",
                "description": "Esta casa es muy bonita he iluminada x6",
                "score": 4,
                "price": "1200",
                "available": true,
                "photos": "https://a0.muscache.com/im/pictures/6722678/3fceadd1_original.jpg?aki_policy=x_large",
                "createdAt": "2018-04-24T01:43:37.779Z",
                "updatedAt": "2018-04-24T01:43:37.779Z",
                "Address": {
                    "id": 4,
                    "calle": "Av. Alvaro Obregon",
                    "num_ext": "168",
                    "num_int": "2",
                    "colonia": "Roma Norte",
                    "ciudad": "Cuauhtemoc",
                    "estado": "Mexico City",
                    "pais": "Mexico",
                    "cp": 33400,
                    "lat": 19.333333333,
                    "long": null,
                    "ref": "",
                    "createdAt": "2018-04-24T01:43:38.246Z",
                    "updatedAt": "2018-04-24T01:43:38.246Z",
                    "EstateId": 7
                }
            },
            {
                "id": 8,
                "estate_name": "Depa bin cool en la roma",
                "description": "Este depa es para gente cool",
                "score": 5,
                "price": "1200",
                "available": true,
                "photos": "https://a0.muscache.com/im/pictures/6715946/86990450_original.jpg?aki_policy=x_large",
                "createdAt": "2018-04-24T01:53:25.545Z",
                "updatedAt": "2018-04-24T01:53:25.545Z",
                "Address": {
                    "id": 5,
                    "calle": "Av. Alvaro Obregon",
                    "num_ext": "169",
                    "num_int": "2",
                    "colonia": "Roma Norte",
                    "ciudad": "Cuauhtemoc",
                    "estado": "Mexico City",
                    "pais": "Mexico",
                    "cp": 33400,
                    "lat": 19.333333333,
                    "long": null,
                    "ref": "",
                    "createdAt": "2018-04-24T01:53:26.088Z",
                    "updatedAt": "2018-04-24T01:53:26.088Z",
                    "EstateId": 8
                }
            }
        ]
            const listPropiedades = propiedades.map((element)=> <PropiedadesLanding nombre={element.estate_name} pais={element.Address.pais} ciudad={element.Address.ciudad} foto={element.photos} precio={element.price} rating={element.score}/>)
            console.log(listPropiedades)
        return (
            <div className="propiedades">
                {listPropiedades}
            </div>
        ) 

    }

}

export default GetPropLanding;