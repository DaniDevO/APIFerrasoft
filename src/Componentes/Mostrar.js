import React from 'react'
import { Link } from 'react-router-dom'


export default class Mostrar extends React.Component{
state = {
        productos:[]
    }

    componentDidMount(){
        fetch('http://localhost/ferrasoft/public/api/consultar')
            .then(response => response.json())
            .then(productosJson => this.setState({productos: productosJson}))
    }

    render(){
        const{productos} = this.state
        return(
            <div className="container">
                <br/>
                <h2>Total de Registros: ({productos.length})</h2>
                <br/>
                <p style={{textAlign: "right"}}>
                    <Link to="/alta">
                        <button type="button" className="btn btn-outline-success btn-sm">
                            Nuevo producto
                        </button>
                    </Link>
                </p>
                <br/>
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Imagen</th>
                            <th scope="col">Codigo</th>
                            <th scope="col">Clave producto</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Piezas</th>
                            <th scope="col">Otros</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map((producto) =>
                            <tr >
                                <td><img src={producto.imagen} alt={producto.codigo} width="30px"/></td>
                                <td>{producto.codigo}</td>
                                <td>{producto.clave_p}</td>
                                <td>{producto.nombre}</td>
                                <td>$ {producto.precio_m}</td>
                                <td>{producto.piezas}</td>
                                <td>
                                    <Link to={{pathname: '/detalle', state: {id: producto.codigo}}}>
                                        <button type="button" className="btn btn-outline-info btn-sm">
                                            Detalle
                                        </button>
                                    </Link>
                                    { ' ' }
                                    <Link to={{pathname: '/editar', state: {id: producto.codigo}}}>
                                        <button type="button" className="btn btn-outline-warning btn-sm">
                                            Editar
                                        </button>
                                    </Link>
                                    { ' ' }
                                    <Link to={{pathname: '/borrar', state: {id: producto.codigo}}}>
                                        <button type="button" className="btn btn-outline-danger btn-sm">
                                            Borrar
                                        </button>
                                    </Link>
                                    { ' ' }
                                    
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                
            </div>
        )
    }
}