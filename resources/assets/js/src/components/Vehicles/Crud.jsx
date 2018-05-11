//Dependencies
import React, { Component } from 'react'
import axios from 'axios'
//Components
import SearchBar from './SearchBar'
import VehicleTable from './VehicleTable'




class Crud extends Component
{
    constructor(props){
        super(props)
        this.state = {
            filter: '',						
					vehicles: []
				}
				this.filterList = this.filterList.bind(this)
				this.showVehicles = this.showVehicles.bind(this)
        /*bind() crea una nueva función, que cuando es llamada,
        asigna a su operador this el valor entregado,
        con una secuencia de argumentos dados precediendo
         a cualquiera entregados cuando la función es llamada.*/
		}

		showVehicles(){ 
			axios('/api/movimientos')      
          .then( (response) => {		
    				this.setState({
    					vehicles: response.data
    				})									        
          })
          .catch( (error) => {
            console.log(error);
          });  
		}
		

    filterList(ev) {
        let filter = ev.target.value  // target: devuleve el elemento que desencadeno el evento        
        // setTimeout(() => {
            this.setState({
                filter: filter
            })
        // }, 1000)        
    }

    render(){
        this.showVehicles()
        return(
            <div>
                <SearchBar onChange={this.filterList} onClick={this.showVehicles}/>
				<VehicleTable vehicles={this.state.vehicles}  filter={this.state.filter}/>
            </div>
        )
		}		

}

export default Crud