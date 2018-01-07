import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Habitaciones } from '../../../imports/api/habitaciones.js';
//import Habitacion from './habitacion.jsx';

export default class Add extends Component {


  handleSubmit(event) {

    event.preventDefault();

    console.log(this.refs.form[1].value);

    // Find the text field via the React ref

    const number = ReactDOM.findDOMNode(this.refs.form[0]).value.trim();
    const type = ReactDOM.findDOMNode(this.refs.form[1]).value.trim();
    const state = ReactDOM.findDOMNode(this.refs.form[2]).value.trim();
    const observation = ReactDOM.findDOMNode(this.refs.form[3]).value.trim();
 

    Habitaciones.insert({

      number,
      type,
      state,
      observation,
      createdAt: new Date(), // current time

    });

 

    // Clear form

    ReactDOM.findDOMNode(this.refs.form[0]).value = '';

  }

  render() {
    return (
        <div className="modal fade" id="basicModal" tabIndex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 className="modal-title" id="myModalLabel">Habitacion</h4>
                </div>
        
            <form className="col-md-12 well" ref="form" onSubmit={this.handleSubmit.bind(this)}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label >Numero</label>
                                        <input type="text" className="form-control" ref="number"name="name" placeholder="Enter Name"/>
                                    </div>
                                    <div className="form-group">
                                        <label >Tipo</label>
                                        <select className="form-control" name="subject">
                                            <option value="Simple">Simple</option>               
                                            <option value="Jacussi">Jacussi</option>              
                                        </select>
                                    </div> 
                                    
                                    <div className="form-group">
                                        <label >Estado</label>
                                        <select className="form-control" name="subject">
                                                         
                                            <option value="Disponible">Disponible</option>               
                                            <option value="Ocupada">Ocupada</option>              
                                            <option value="NoArrendar">No Arrendar</option>
                                        </select>
                                    </div>                        
                                </div>
                        
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label >Observacion</label>
                                        <textarea className="form-control" name="message" rows="11" placeholder="Enter Message"></textarea>
                                    </div>
                                    <div className="form-group">
                                       <button className="btn btn-primary pull-right" type="submit">Send</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                 </div>

        </div>
</div>
               
    )
  }
}

