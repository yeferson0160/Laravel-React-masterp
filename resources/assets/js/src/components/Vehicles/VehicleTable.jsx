//Dependencies
import React, { Component } from 'react'
import {Table} from 'react-bootstrap'
//Components
import Actions from './actions/Actions'


class VehicleTable extends Component{
    
    render (){
        let rows =[]
        const filter = this.props.filter
        if(this.props.vehicles != null){					
        	for(var i = 0, length1 = this.props.vehicles.length; i < length1; i++){
				if (this.props.vehicles[i].placa.indexOf(filter) > -1){
					if(this.props.vehicles[i].ifsalida != 1){
						rows.push(<tr key={this.props.vehicles[i].cmovi}>
							<td>{this.props.vehicles[i].placa}</td>
							<td>{this.props.vehicles[i].fecha_entrada}</td>
							<td>{this.props.vehicles[i].fecha_salidal}</td>
							<td>{this.props.vehicles[i].tiempo} Minutos</td>
							<td>{this.props.vehicles[i].valtotal}</td>
							<td>{this.props.vehicles[i].cvehi}</td>
							<td> <Actions vehicle={this.props.vehicles[i]}/> </td>
						</tr>)	
					}		
				}									
        	}
        }
        return(						
					<div >
						<Table striped bordered condensed hover>
							<thead>
							<tr>
								<th>Placa</th>
								<th>Fecha y Hora Entrada</th>
								<th>Fecha y Hora Salida</th>
								<th>Tiempo</th>
								<th>Valor Pagado</th>
								<th>Vehiculo</th>
								<th>Acciones</th>
							</tr>
							</thead>
							<tbody>
								{rows}
							</tbody>							
						</Table>										
          </div>            
      )
    }
}

export default VehicleTable