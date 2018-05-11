import React, { Component } from 'react'
import EditVehicle from './EditVehicle'
import DeleteVehicle from './DeleteVehicle'
import '../../App.css'
class Actions extends Component {

	render () {		
		return (
			<div className='Actions'>
				<EditVehicle vehicle={this.props.vehicle} /> &nbsp;
				<DeleteVehicle vehicle={this.props.vehicle} />											
			</div>
		)
	}
}

export default Actions