import React, { Component } from 'react';
import { Habitaciones } from '../../../imports/api/habitaciones.js';
import Update from './update.jsx';

export default class Habitacion extends Component {
    deleteThisRoom() {
        console.log(this.props.habitacion.number);
        Habitaciones.remove(this.props.habitacion._id);

    }
  render() {
 
    return (
								<tr data-status="completed">
                                    <td  align="center">{this.props.habitacion.number}</td>
                                    
                                   
                                    <td>{this.props.habitacion.type}</td>
                                    <td>{this.props.habitacion.state}</td>
                                     <td>{this.props.habitacion.observation}</td>
                                    <td align="center">
                                        <a className="btn btn-default" data-toggle="modal" data-target="#basicModal"><span className="glyphicon glyphicon-pencil"
                                                                         aria-hidden="true"></span></a>
                                        <a className="btn btn-danger" onClick={this.deleteThisRoom.bind(this)}><span className="glyphicon glyphicon-trash"
                                                                        aria-hidden="true"></span></a>
                                                                        <Update/>
                                    </td>

                                </tr>

    );
  }
}

