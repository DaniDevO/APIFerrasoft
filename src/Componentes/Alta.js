import React from 'react'
import { Link } from 'react-router-dom'

export default class Alta extends React.Component{

	state = {
		codigo: '',
		clave_p: '',
		nombre: '',
		tamaño: '',
		precio: '',
		precio_m: '',
		piezas: '',
		imagen: '',
		descripcion: '',
		almacen: '',
		activo: '1',
		idmarc: '',
		marcas: [],
		alta: '',
	}

	componentDidMount(){
		fetch('http://localhost/ferrasoft/public/api/marcas')
			.then(response => response.json())
			.then(marcasJson => this.setState({ marcas: marcasJson }))
	}

	dataField = (e) => {this.setState({ [e.target.name]: e.target.value})}

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
		fetch('http://localhost/ferrasoft/public/api/alta',{
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'aplication/json',
			},
			mode: "cors",
			body: JSON.stringify(data)
		})
		.then(response => response.json())
		.then(data => this.setState({alta: "Registro Exitoso !!!"}))
	}

	render(){
		const{marcas, alta} = this.state
		return(
			<div className="container" style={{maxWidth: "750px"}}>
				<br/>
				<h1>Nuevo producto</h1>
				<br/>

				{ alta? <div className="alert alert-success" role="alert">{alta}</div>:<div></div> }

				<form onSubmit={this.subForm}>

					<div class="row">
                        <div class="col-lg-6">
                        	<label>Codigo:</label>
							<input type="text" name="codigo" className="form-control form-control-sm" onChange={this.dataField}/>
						</div>
                        <div class="col-lg-6">
                        	<label>Clave producto:</label>
							<input type="text" name="clave_p" className="form-control form-control-sm" onChange={this.dataField}/>
						</div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6">
							<label>Nombre:</label>
							<input type="text" name="nombre" className="form-control form-control-sm" onChange={this.dataField}/>
						</div>
                        <div class="col-lg-6">
							<label>Tamaño:</label>
							<input type="text" name="tamaño" className="form-control form-control-sm" onChange={this.dataField}/>
						</div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6">
							<label>Precio de provedor:</label>
							<input type="text" name="precio" className="form-control form-control-sm" onChange={this.dataField}/>
						</div>
                        <div class="col-lg-6">
							<label>Precio de venta:</label>
							<input type="text" name="precio_m" className="form-control form-control-sm" onChange={this.dataField}/>
						</div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6">
							<label>Piezas:</label>
							<input type="text" name="piezas" className="form-control form-control-sm" onChange={this.dataField}/>
						</div>
                        <div class="col-lg-6">
							<label>Imagen (url):</label>
							<input type="text" name="imagen" className="form-control form-control-sm" onChange={this.dataField}/>
						</div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6">
							<label>Material:</label>
							<input type="text" name="material" className="form-control form-control-sm" onChange={this.dataField}/>
						</div>
                        <div class="col-lg-6">
							<label>Descripcion:</label>
							<input type="text" name="descripcion" className="form-control form-control-sm" onChange={this.dataField}/>
						</div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6">
							<label>Stock:</label>
							<input type="text" name="almacen" className="form-control form-control-sm" onChange={this.dataField}/>
						</div>
                        <div class="col-lg-6">
							<label>Activo:</label>
							<input type="text" name="activo" value="1" className="form-control form-control-sm" onChange={this.dataField} disabled/>
						</div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6">
							<label htmlFor="marcas">Grupos:</label>
							<select name="idmarc" id="marcas" className="form-control" onChange={this.dataField}>
							{ marcas.map((marca, i) => <option value={marca.idmarc} key={i}>{marca.marca}</option>) }
						</select>
						</div>
                        <div class="col-lg-6">
						
						</div>
                    </div>

					<br/>
					<div className="text-center">
						<button type="submit" className="btn btn-primary">Registrar</button>
						{ '	' }
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
