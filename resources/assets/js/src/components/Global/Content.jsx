import React, { Component } from 'react'

export class Content extends Component {

	render() {
		const {body} = this.props
		return (
			<div>
				<h1>Lista de Vehiculos</h1>
				{body}
			</div>
		)
	}
}

export default Content
