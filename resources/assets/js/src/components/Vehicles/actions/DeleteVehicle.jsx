import React, { Component } from 'react'
import axios from 'axios'
import { Button, Modal} from 'react-bootstrap'

class DeleteVehicle extends Component {

	constructor(){
		super()
		this.state={
			displayAlert: false
		}

		this.confirmDelete = this.confirmDelete.bind(this)
		this.cancelDelete = this.cancelDelete.bind(this)
		this.deleteProduct = this.deleteProduct.bind(this)		
		this.outMovimiento = this.outMovimiento.bind(this)		
	}

	confirmDelete(){		
		this.setState({
			displayAlert: true
		})			
	}

	cancelDelete(){
		this.setState({
			displayAlert: false
		})
	}

	deleteProduct() {
		const id = this.props.vehicle
		let data = {
			id:id
		}
		console.log(id)
		axios.post('/api/outMovimientos', data)
		.then( (response) => {			
			console.log(response);		
		})
		.catch( (error) => {
			console.log(error);
		})	
	}

	outMovimiento(vehicle){
	}
	render () {
		return (
			<div>						
				<Button bsStyle='info' onClick={this.deleteProduct}> Generar Salida </Button>

				<Modal show={this.state.displayAlert} onHide={this.cancelDelete}>
					<Modal.Header closeButton>
					<Modal.Title>Delete vehicle</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p>Are you sure of delete the product <strong>{this.props.vehicle.producto}</strong> that contains <strong>{this.props.vehicle.stock}</strong> units in stock and its price is <strong>{this.props.vehicle.precio}</strong>?</p>						
					</Modal.Body>
					<Modal.Footer>                
						<Button bsStyle="danger" onClick={this.deleteProduct}>Yes</Button> &nbsp;           
						<Button onClick={this.cancelDelete}>No</Button>
					</Modal.Footer>                
				</Modal>	
				
			</div>
		)
	}
}

export default DeleteVehicle