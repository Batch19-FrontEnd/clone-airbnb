import React, { Component } from 'react';
import './test.css';
//import para  traer el componenet raiz de react

//Se crea clase con  mismo nombre que componente
class Test extends Component{

    constructor(props){
        super(props);
        this.state = {
            saludito:"Hello my friends!!"
        };
    }

    
    componentWillMount() {
        //Aqui se hacen peticiones a una API
    }

    componentWillReceiveProps(){
        //Si el componente padre pasa props despues de renderear
    }
    


    render() {
        //Necesita regresar un objeto
        return (
        
            <div>
                {/* debe haber un elemento contenedor */}
                <h5>{this.props.saludo}</h5>
                <h3>{this.state.saludito}</h3>
            </div> 
        );
    }

}
//lo unico que voy a exportar
export default Test;
