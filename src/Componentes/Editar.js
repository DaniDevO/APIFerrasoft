import React from 'react'
import { Link } from 'react-router-dom'

export default class Editar extends React.Component{

	state = {
		producto: [],
		marcas: [],
		editar: '',
	}

	componentDidMount(){
		//-------------------------- Marcas ----------------------------------
		fetch('http://localhost/ferrasoft/public/api/marcas')
			.then(response => response.json())
			.then(marcasJson => this.setState({ marcas: marcasJson }))

		//-------------------------- Productos ----------------------------------
		fetch('http://localhost/ferrasoft/public/api/detalle/'+this.props.location.state.id)
			.then(response => response.json())
			.then(productosJson => this.setState({ producto: productosJson }))
	}

	dataField = (e) => {
		this.setState({ 
			producto: {
				...this.state.producto,
				[e.target.name]: e.target.value
			}
		})
	}

	subForm = (e) => {
		e.preventDefault();
		let data = {
			codigo: this.state.codigo,
			clave_p: this.state.clave_p,
			nombre: this.state.nombre,
			tamaño: this.state.tamaño,
			precio: this.state.precio,
			precio_m: this.state.precio_m,
			piezas: this.state.piezas,
			imagen: this.state.imagen,
			descripcion: this.state.descripcion,
			almacen: this.state.almacen,
			activo: this.state.activo,
			idmarc: this.state.idmarc,
		};
		fetch('http://localhost/ferrasoft/public/api/editar/'+this.state.producto.codigo,{
			method: 'PUT',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'aplication/json',
			},
			mode: "cors",
			body: JSON.stringify(data)
		})
		.then(response => response.json())
		.then(data => this.setState({editar: "Se Actualizo Correctamente !!!"}))
	}

	render(){
		const{marcas, producto, editar} = this.state
		return(
			<div className="container" style={{maxWidth: "750px"}}>
				<br/>
				<h1>Modificacion de Producto</h1>
				<br/>

				{ editar? <div className="alert alert-success" role="alert">{editar}</div>:<div></div> }

				<form onSubmit={this.subForm}>

					<div className="row">
                        <div className="col-lg-6">
							<label htmlFor="marcas">Marca:</label>
							<select name="idmarc" id="marcas" className="form-control" onChange={this.dataField}>
								{ marcas.map((marca, i) => 
								<option value={marca.idmarc} key={i}>
									{(marca.idmarc === producto.idmarc)?
										'- - -' + marca.marca  + '- - -'
										:
										marca.marca 
									}
								</option>) }
							</select>
						</div>
                        <div className="col-lg-6">
							<label>Clave producto:</label>
							<input type="text" name="clave_p" defaultValue={producto.clave_p} className="form-control form-control-sm" onChange={this.dataField}/>
						</div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
							<label>Nombre:</label>
							<input type="text" name="nombre" defaultValue={producto.nombre} className="form-control form-control-sm" onChange={this.dataField}/>
						</div>
                        <div className="col-lg-6">
							<label>Tamaño:</label>
							<input type="text" name="tamaño" defaultValue={producto.tamaño} className="form-control form-control-sm" onChange={this.dataField}/>
						</div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
							<label>Precio de provedor:</label>
							<input type="text" name="precio" defaultValue={producto.precio} className="form-control form-control-sm" onChange={this.dataField}/>
						</div>
                        <div className="col-lg-6">
							<label>Precio de venta:</label>
							<input type="text" name="precio_m" defaultValue={producto.precio_m} className="form-control form-control-sm" onChange={this.dataField}/>
						</div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
							<label>Piezas:</label>
							<input type="text" name="piezas" defaultValue={producto.piezas} className="form-control form-control-sm" onChange={this.dataField}/>
						</div>
                        <div className="col-lg-6">
							<label>Imagen (url):</label>
							<input type="text" name="imagen" defaultValue={producto.imagen} className="form-control form-control-sm" onChange={this.dataField}/>
						</div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
							<label>Material:</label>
							<input type="text" name="material" defaultValue={producto.material} className="form-control form-control-sm" onChange={this.dataField}/>
						</div>
                        <div className="col-lg-6">
							<label>Descripcion:</label>
							<input type="text" name="descripcion" defaultValue={producto.descripcion} className="form-control form-control-sm" onChange={this.dataField}/>
						</div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
							<label>Stock:</label>
							<input type="text" name="almacen" defaultValue={producto.almacen} className="form-control form-control-sm" onChange={this.dataField}/>
						</div>
                        <div className="col-lg-6">
							<label>Activo:</label>
							<input type="text" name="activo" value="1" className="form-control form-control-sm" onChange={this.dataField} disabled/>
						</div>
                    </div>
					
					<br/>
					<div className="text-center">
						<button type="submit" className="btn btn-primary">Modificar</button>
						{ '	' }
						<Link to="/">
						<button type="button" className="btn btn-danger">Cancelar</button>
						</Link>
					</div>
				</form>
			</div>
		)
	}
}
