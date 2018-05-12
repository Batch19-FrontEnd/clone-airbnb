import React, { Component } from 'react';
import Axios from 'axios';
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Col, Button } from 'reactstrap';
import './createProperty.css';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

// Importacion para traer el componente raiz de react

// Creamos la clase con el mismo nombre del componente

class CreateProperty extends Component {
    constructor(props) {
        super(props)
        this.state = {
            estate_name: '',
            description: '',
            price: '',
            calle: '',
            num_ext: '',
            colonia: '',
            ciudad: '',
            estado: '',
            pais: '',
            cp: '',
            ref: '',
            wifi: false,
            estufa: false,
            parking: false,
            refri: false,
            tv: false,
            bathrooms: '',
            beds: '',
            address: '',
            lat: '',
            lng: ''

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChangAddress = (address) => {
        this.setState({ address })
    }

    handleSelectAddress = (address) => {
        geocodeByAddress(address)
            .then(results => {
                let result = results[0].address_components;
                this.setAddress(result)
                getLatLng(results[0]).then(latLng => {
                    console.log('latLng: ', latLng);
                    this.state.lat = latLng.lat;
                    this.state.lng = latLng.lng;
                });
            })
            .catch(error => console.error('Error', error))
    }

    setAddress(address) {

        let dataClean = [];
        for (let i in address) {
            for (let type in address[i]) {
                dataClean.push({ type: address[i].types[0], long_name: address[i].long_name });
            }

        }

        for (let index in dataClean) {
            this.setValueState(dataClean[index])
        }

    }

    setValueState(value) {
        switch (value.type) {
            case 'street_number':
                this.setState({ ['num_ext']: value.long_name });
                break
            case 'route':
                this.setState({ ['calle']: value.long_name });
                break
            case 'political':
                this.setState({ ['colonia']: value.long_name });
                break
            case 'administrative_area_level_1':
                this.setState({ ['estado']: value.long_name });
                break
            case 'locality':
                this.setState({ ['ciudad']: value.long_name });
                break
            case 'country':
                this.setState({ ['pais']: value.long_name });
                break
            case 'postal_code':
                this.setState({ ['cp']: value.long_name });
                break
        }
    }

    handleChange(event) {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

    }


    handleSubmit(event) {
        event.preventDefault();
        const estate_name = this.state.estate_name;
        const description = this.state.description;
        const price = this.state.price;

        const calle = this.state.calle;
        const num_ext = this.state.num_ext;
        const colonia = this.state.colonia;
        const ciudad = this.state.price;
        const estado = this.state.estado;
        const pais = this.state.pais;
        const cp = this.state.cp;
        const lat = this.state.lat;
        const long = this.state.lng;
        const ref = this.state.ref;
        const wifi = this.state.wifi;
        const estufa = this.state.estufa;
        const parking = this.state.parking;
        const refri = this.state.refri;
        const tv = this.state.tv;
        const bathrooms = this.state.bathrooms;
        const beds = this.state.beds;

        var objeto = {
            "estate_name": estate_name,
            "description": description,
            "price": price,
            "address": {
                "num_ext": num_ext,
                "colonia": colonia,
                "ciudad": ciudad,
                "estado": estado,
                "pais": pais,
                "cp": cp,
                "lat": lat,
                "long": long,
                "ref": ref,
                "calle": calle
            },
            "services": {
                "wifi": wifi,
                "parking": parking,
                "refri": refri,
                "tv": tv,
                "bathrooms": bathrooms,
                "beds": beds,
            }


        }
        this.registrarCliente(objeto)

    }

    render() {
        return (
            <div className="CreateProperty">
                <h1>Crear propiedad</h1>
                <Col md={10}>

                    <div className="row formularioCreateProperty">
                        <Form onSubmit={this.handleSubmit} className="col-12">
                            <FormGroup>
                                <Input type="text" name="estate_name" id="estate_name" placeholder="Nombre de propiedad" value={this.state.estate_name} onChange={this.handleChange} required />
                            </FormGroup>

                            <FormGroup>
                                <Input type="text" name="description" id="description" placeholder="Descripción" value={this.state.description} onChange={this.handleChange} required />
                            </FormGroup>

                            <FormGroup>
                                <Input type="text" name="price" id="price" placeholder="Precio" value={this.state.price} onChange={this.handleChange} required />
                            </FormGroup>

                            <FormGroup>
                                <PlacesAutocomplete
                                    value={this.state.address}
                                    onChange={this.handleChangAddress}
                                    onSelect={this.handleSelectAddress}
                                >
                                    {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                                        <div>
                                            <input
                                                {...getInputProps({
                                                    placeholder: 'Buscar dirección ...',
                                                    className: 'location-search-input'
                                                })}
                                            />
                                            <div className="autocomplete-dropdown-container">
                                                {suggestions.map(suggestion => {
                                                    const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                                                    // inline style for demonstration purpose
                                                    const style = suggestion.active
                                                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                                    return (
                                                        <div {...getSuggestionItemProps(suggestion, { className, style })}>
                                                            <span>{suggestion.description}</span>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )}
                                </PlacesAutocomplete>
                            </FormGroup>

                            <FormGroup>
                                <Input type="text" name="calle" id="calle" placeholder="Calle" value={this.state.calle} onChange={this.handleChange} required />
                            </FormGroup>

                            <FormGroup>
                                <Input type="text" name="num_ext" id="num_ext" placeholder="Numero exterior" value={this.state.num_ext} onChange={this.handleChange} required />
                            </FormGroup>

                            <FormGroup>
                                <Input type="text" name="colonia" id="colonia" placeholder="Colonia" value={this.state.colonia} onChange={this.handleChange} required />
                            </FormGroup>

                            <FormGroup>
                                <Input type="text" name="ciudad" id="ciudad" placeholder="Ciudad" value={this.state.ciudad} onChange={this.handleChange} required />
                            </FormGroup>

                            <FormGroup>
                                <Input type="text" name="estado" id="estado" placeholder="Estado" value={this.state.estado} onChange={this.handleChange} required />
                            </FormGroup>

                            <FormGroup>
                                <Input type="text" name="pais" id="pais" placeholder="Pais" value={this.state.pais} onChange={this.handleChange} required />
                            </FormGroup>

                            <FormGroup>
                                <Input type="number" name="cp" id="cp" placeholder="Código postal" value={this.state.cp} onChange={this.handleChange} required />
                            </FormGroup>

                            <FormGroup>
                                <Input type="text" name="ref" id="ref" placeholder="Referencias" value={this.state.ref} onChange={this.handleChange} required />
                            </FormGroup>
                            <div className="estate">
                                <FormGroup>
                                    <Label for="">Servicios </Label>
                                </FormGroup>

                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="wifi" id="wifi" checked={this.state.wifi} onChange={this.handleChange} />
                                        Wifi
                                </Label>
                                </FormGroup>

                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="estufa" id="estufa" checked={this.state.estufa} onChange={this.handleChange} />
                                        Estufa
                            </Label>
                                </FormGroup>

                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="parking" id="parking" checked={this.state.parking} onChange={this.handleChange} />
                                        Estacionamiento
                        </Label>
                                </FormGroup>

                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="refri" id="refri" checked={this.state.refri} onChange={this.handleChange} />
                                        Refrigerador
                    </Label>
                                </FormGroup>

                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="tv" id="tv" checked={this.state.tv} onChange={this.handleChange} />
                                        TV
                </Label>
                                </FormGroup>



                            </div>


                            <FormGroup>
                                <Input type="number" name="bathrooms" id="bathrooms" placeholder="Baños" value={this.state.bathrooms} onChange={this.handleChange} required />
                            </FormGroup>


                            <FormGroup>
                                <Input type="number" name="beds" id="beds" placeholder="Camas" value={this.state.beds} onChange={this.handleChange} required />
                            </FormGroup>

                            <Button color="danger" type="submit" className="col-12" >Crear</Button>
                        </Form>



                    </div>
                </Col>
            </div>


        )
    }

    registrarCliente(objeto) {
        console.log("registrando", objeto)


        const config = {
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
        }
        console.log(config);

        Axios.post('https://airbnb-cn-b19.herokuapp.com/api/v1/estates', objeto, config)
            .then(Response => {
                console.log('Response:', Response);
                window.location.href = '/GetPropLanding';
            })
            .catch(Error => console.log(Error));

    }

}

export default CreateProperty;