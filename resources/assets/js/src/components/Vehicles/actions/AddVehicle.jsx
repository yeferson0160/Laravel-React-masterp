import React, { Component } from 'react'
import axios from 'axios'
import {FormControl, Button, Alert, Modal, FormGroup, ControlLabel} from 'react-bootstrap'
import moment from 'moment';

class AddVehicle extends Component {

	constructor(){
		super()
		this.state={
			placa: '',
			vehiculo: '',
			fechaIngreso: moment().locale('en-gb').format('YYYY-MM-DD hh:mm:ss'),
			displayAdd: false,
			insert: false,
		}
		this.handlePlaca = this.handlePlaca.bind(this)
		this.handleVehiculo = this.handleVehiculo.bind(this)
		this.handleFechaIngreso = this.handleFechaIngreso.bind(this)
		this.insertMovimiento = this.insertMovimiento.bind(this)
		this.confirmAdd = this.confirmAdd.bind(this)
		this.cancelAdd = this.cancelAdd.bind(this)
		this.dataVehiculo()
	}

	confirmAdd(){		
		this.setState({
			displayAdd: true
		})			
	}

	cancelAdd(){
		this.setState({
			displayAdd: false
		})
	}

	handlePlaca(ev){
		this.setState({ 
			placa: ev.target.value				
		})					
	}

	handleFechaIngreso(ev){
		this.setState({ 
			fechaIngreso: ev.target.value				
		})
	}

	handleVehiculo(ev){
		this.setState({ 
			vehiculo: ev.target.value				
		})
	}
	
	insertMovimiento(){
		let data = {
			placa:this.state.placa,
			fechaIngreso:this.state.fechaIngreso,
			vehiculo:this.state.vehiculo
		}
		axios.post('/api/addMovimientos', data)
		.then( (response) => {			
			this.setState({	
				placa: '',
				vehiculo: '',
				fechaIngreso: '',			
				insert: true
			})			
		})
		.catch( (error) => {
			console.log(error);
		})		
	}

	dataVehiculo(){
		axios('/api/vehiculos')      
		.then( (response) => {		
			this.setState({
				typeVehicle: response.data
			})	        
		})
		.catch( (error) => {
			console.log(error);
		});
	}
	render () {
		let insert = this.state.insert
		let alert = []
		let options = [];
		if(insert){
			alert.push(<Alert bsStyle="success" key={insert}>Registy successfull!</Alert>)
			setTimeout(() => {
				this.setState({					
					insert: false
				})
			}, 1500)			
		}
		setTimeout(()=>{
			this.setState({					
				fechaIngreso: moment().locale('en-gb').format('YYYY-MM-DD hh:mm:ss')
			})
		},1000);
		if(this.state.typeVehicle != null){
			options.push(<option value="@">Seleccione...</option>)					
        	for(var i = 0, length1 = this.state.typeVehicle.length; i < length1; i++){
				options.push(<option value={this.state.typeVehicle[i].cvehi}>{this.state.typeVehicle[i].nvehi}</option>)						
        	}
		}
		return (
			<div>				
				<Button bsStyle='success' onClick={this.confirmAdd} >Ingresar Vehiculo</Button>
				<Modal show={this.state.displayAdd} onHide={this.cancelAdd}>
					<Modal.Header closeButton>
					<Modal.Title>Ingresar Vehiculo</Modal.Title>
					</Modal.Header>
					<Modal.Body>
					<p>
						<strong>Placa</strong>
						<FormControl placeholder='Ingrese la placa' value={this.state.placa} onChange={this.handlePlaca}/>
					</p>
					<p>
						<strong>Fecha de ingreso</strong>
						<FormControl placeholder='Inser quantity in fechaIngreso' value={this.state.fechaIngreso} onChange={this.handleFechaIngreso} disable/>
					</p>
					<FormGroup controlId="formControlsSelect">
						<ControlLabel>Select</ControlLabel>
					    <FormControl componentClass="select" placeholder="select" onChange={this.handleVehiculo}>
					    	{options}
					    </FormControl>
					</FormGroup>
					<h4>{alert}</h4>																
					</Modal.Body>
					<Modal.Footer>                
						<Button bsStyle="success" onClick={this.insertMovimiento}>Add</Button> &nbsp;           
						<Button onClick={this.cancelAdd}>Cancel</Button>
					</Modal.Footer>                
				</Modal>

			</div>
		)
	}
}

export default AddVehicle