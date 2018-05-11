import React, { Component } from 'react'
import axios from 'axios'
import {FormControl, Button, Alert, Modal} from 'react-bootstrap'

class EditVehicle extends Component {

	constructor(props){
		super(props)
		this.state={
			producto: this.props.vehicle.producto,
			precio: this.props.vehicle.precio,
			stock: this.props.vehicle.stock,
			displayEdit: false,
			edit: false
		}
		this.handleNameProduct = this.handleNameProduct.bind(this)
		this.handlePriceProduct = this.handlePriceProduct.bind(this)
		this.handleStockProduct = this.handleStockProduct.bind(this)
		this.editProduct = this.editProduct.bind(this)
		this.confirmEdit = this.confirmEdit.bind(this)
		this.cancelEdit = this.cancelEdit.bind(this)
	}

	confirmEdit(){		
		this.setState({
			displayEdit: true
		})			
	}

	cancelEdit(){
		this.setState({
			displayEdit: false
		})
	}

	handleNameProduct(ev){
		this.setState({ 
			producto: ev.target.value				
		})					
	}

	handleStockProduct(ev){
		this.setState({ 
			stock: ev.target.value				
		})
	}

	handlePriceProduct(ev){
		this.setState({ 
			precio: ev.target.value				
		})
	}
	
	editProduct(){

		let data = new FormData()
		data.append('idproducto', this.props.vehicle.idproducto)	
		data.append('producto', this.state.producto)
		data.append('stock', this.state.stock)
		data.append('precio', this.state.precio)
		
		axios.post('http://localhost/PHP/Ejemplo-php-ajax/edit.php', data)
		.then( (response) => {			
			this.setState({			
				edit: true
			})			
		})
		.catch( (error) => {
			console.log(error);
		})		
	}

	render () {
		let edit = this.state.edit
		let alert = []
		if(edit){
			alert.push(<Alert bsStyle="warning" key={edit}>Edition successfull!</Alert>)
			setTimeout(() => {
				this.setState({					
					edit: false,
					displayEdit: false			
				})				
			}, 1500)			
		}

		return (
			<div>				
				<Button bsStyle='warning' onClick={this.confirmEdit} >Edit</Button>				

				<Modal show={this.state.displayEdit} onHide={this.cancelEdit}>
					<Modal.Header closeButton>
					<Modal.Title>Edit vehicle</Modal.Title>
					</Modal.Header>
					<Modal.Body>
					<p>
						<strong>Name</strong>
						<FormControl placeholder='Inser name of product' value={this.state.producto} onChange={this.handleNameProduct}/>
					</p>
					<p>
						<strong>Stock</strong>
						<FormControl placeholder='Inser quantity in stock' value={this.state.stock} onChange={this.handleStockProduct}/>
					</p>
					<p>
						<strong>Price</strong>
						<FormControl placeholder='Inser price of product' value={this.state.precio} onChange={this.handlePriceProduct}/>
					</p>
					<h4>{alert}</h4>																
					</Modal.Body>
					<Modal.Footer>                
						<Button bsStyle="warning" onClick={this.editProduct}>Edit</Button> &nbsp;           
						<Button onClick={this.cancelEdit}>Cancel</Button>
					</Modal.Footer>                
				</Modal>

			</div>
		)
	}
}

export default EditVehicle