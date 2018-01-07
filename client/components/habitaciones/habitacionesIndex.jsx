import React from 'react'
import { withTracker } from 'meteor/react-meteor-data';
 

import { Habitaciones } from '../../../imports/api/habitaciones.js';
import Habitacion from './habitacion.jsx';
import Add from './add.jsx';


class HabitacionesIndex extends React.Component {

    renderHabitaciones() {
        
        return this.props.habitaciones.map((habitacion) => (

          <Habitacion key={habitacion._id} habitacion={habitacion} />

        ));

     }
  render() {
    return (
    	<header>
         <div className="container">
                <div className="row">
                    <div className="col-md-12 col-md-offset-1">
                        <div className="panel panel-default panel-table">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col col-xs-6">
                                        <h3 className="panel-title">Habitaciones</h3>
                                    </div>
                                    <div className="col col-xs-6 text-right">
                                        <div className="pull-right">
                                     
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel-body">
                                <table id="mytable" className="table table-striped table-bordered table-list">
                                    <thead>
                                    <tr>
                                        <th className="hidden-xs">Numero</th>
                                        
                                        
                                        <th className="col-text">Tipo</th>
                                        <th className="col-text">Estado</th>
                                        <th className="col-text">Observacion</th>
                                        <th className="col-tools"><span className="glyphicon glyphicon-wrench" aria-hidden="true"></span>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    
                                    {this.renderHabitaciones()}

                                    </tbody>
                                </table>

                            </div>
                            <div className="panel-footer">
                                <div className="row">
                                    <div className="col col-xs-offset-3 col-xs-6">
                                        <nav aria-label="Page navigation" className="text-center">
                                            <ul className="pagination">
                                                <li>
                                                    <a href="#" aria-label="Previous">
                                                        <span aria-hidden="true">«</span>
                                                    </a>
                                                </li>
                                                <li className="active"><a href="#">1</a></li>
                                                <li><a href="#">2</a></li>
                                                <li><a href="#">3</a></li>
                                                <li><a href="#">4</a></li>
                                                <li><a href="#">5</a></li>
                                                <li>
                                                    <a href="#" aria-label="Next">
                                                        <span aria-hidden="true">»</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="col col-xs-3">
                                        <div className="pull-right">
                                            
                                                <a data-toggle="modal" data-target="#basicModal" type="button" className="btn btn-primary">
                                                    <span className="glyphicon glyphicon-plus"
                                                          aria-hidden="true"></span>
                                                    Agregar Habitacion
                                                </a>
                                            <Add/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </header>
    )
  }
}

export default withTracker(() => {

  return {

    habitaciones: Habitaciones.find({}).fetch(),

  };

})(HabitacionesIndex);