import React, {Component} from 'react'
import AddVehicle from './actions/AddVehicle'
import {FormControl, Button} from 'react-bootstrap'
import '../App.css'

class SearchBar extends Component{

  render(){        
    return(
			<div className='SearchBar' >				
				<FormControl style={{width: 500}} onChange={this.props.onChange} placeholder='Search...'/> &nbsp;	
				<Button bsStyle='primary' onClick={this.props.onClick}>Show vehicles</Button> &nbsp;
				<AddVehicle/>																													
			</div>
    );
  }
}

export default SearchBar