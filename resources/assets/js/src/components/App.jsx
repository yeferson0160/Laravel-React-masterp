//Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'
//Components
import Header from './Global/Header'
import Content from './Global/Content'
import Footer from './Global/Footer'
// Assets
import './App.css'
//Data
import items from './data/Menu'
import Crud from './vehicles/Crud'

class App extends Component {

  render() {
		const {children} = this.props
    return (
			<div>
				<Header items = {items} />
				<Content body = {children}/>  
        <Footer /> 				
      </div>
    );
  }
}

App.propTypes = {
	children: PropTypes.object.isRequired //Children = todos los componentes que contiene un componente
}
 
export default App