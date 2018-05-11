//Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
//Assets
import './Css/Header.css'

class Header extends Component {
	
	render() {
		const { items } = this.props  
		return (
			<div className='Header'>
				<div className='Logo'>
					<h2>Bienvenidos</h2>
					<ul className='Menu'>
						<div>
						{ items.map((item, key) => <li key={key}><Link to={item.url}>{item.title}</Link></li>) }
						</div>						
					</ul>
				</div>				
			</div>
		)
	}
}

Header.propTypes = {
	items: PropTypes.array.isRequired
}

export default Header
