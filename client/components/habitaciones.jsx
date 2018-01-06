import React from 'react'

class Habitaciones extends React.Component {
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
                                    <h3 className="panel-title">Panel title</h3>
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
                                   
                                    <th className="col-tools"><span className="glyphicon glyphicon-wrench" aria-hidden="true"></span>
                                    </th>
                                    <th className="hidden-xs">ID</th>
                                    <th className="col-text">Name</th>
                                    <th className="col-text">Email</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr data-status="completed">
                                    <td align="center"><input type="checkbox" className="checkthis"/></td>
                                    <td align="center">
                                        <a className="btn btn-default"><span className="glyphicon glyphicon-pencil"
                                                                         aria-hidden="true"></span></a>
                                        <a className="btn btn-danger"><span className="glyphicon glyphicon-trash"
                                                                        aria-hidden="true"></span></a>
                                    </td>
                                    <td className="hidden-xs">1</td>
                                    <td>John Doe</td>
                                    <td>johndoe@example.com</td>
                                </tr>
                                <tr data-status="pending">
                                    <td align="center"><input type="checkbox" className="checkthis"/></td>
                                    <td align="center">
                                        <a className="btn btn-default"><span className="glyphicon glyphicon-pencil"
                                                                         aria-hidden="true"></span></a>
                                        <a className="btn btn-danger"><span className="glyphicon glyphicon-trash"
                                                                        aria-hidden="true"></span></a>
                                    </td>
                                    <td className="hidden-xs">2</td>
                                    <td>Jen Curtis</td>
                                    <td>jencurtis@example.com</td>
                                </tr>
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
                                        <button type="button" className="btn btn-primary">
                                            <span className="glyphicon glyphicon-plus"
                                                  aria-hidden="true"></span>
                                            Add row
                                        </button>
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

export default Habitaciones;