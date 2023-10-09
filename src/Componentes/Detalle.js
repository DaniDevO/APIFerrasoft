import React from 'react'
import { Link } from 'react-router-dom'

export default class Detalle extends React.Component{
    state={
  producto: []
    }

    componentDidMount(){
        fetch("http://localhost/ferrasoft/public/api/detalle/"+this.props.location.state.id)
        .then(response => response.json())
        .then(productosJson => this.setState({ producto: productosJson}))
    }
    render(){
        const {producto} = this.state
        return(
            <div className="container">
                <br/>
                <h2>Detalle del Producto</h2>
                <br/><br/>
                <div className="card mb-3" style={{maxWidth: "740px"}}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={producto.imagen} className="card-img" alt={producto.nombre} height="340px"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{producto.nombre}</h5>
                                <p className="card-text">
                                    <hr/>
                                    <h5>Caracteristicas:</h5>
                                    <b>Marca</b>: {producto.idmarc} <br/>
                                    <b>Codigo producto</b>: {producto.codigo} <br/>
                                    <b>Clave producto</b>: {producto.clave_p} <br/>
                                    <b>Precio</b>: {producto.precio} <br/>
                                    <b>Piezas</b>: {producto.piezas} <br/>
                                    <b>Material</b>: {producto.material} <br/>
                                    <b>Descripción</b>: {producto.descripcion} <br/>
                                    <b>Stock</b>: {producto.almacen} <br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <Link to='/' >
                    <button type="button" className="btn btn-outline-dark btn-sm">
                        Regresar
                    </button>
                </Link>
            </div>
        )
    }
}