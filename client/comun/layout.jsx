import React from 'react'

export default class extends React.Component {
  render() {
    return (
      <div className=" layout">
        <div className="row">
           <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
              <div className="container">
                
                  <div className="navbar-header">
                      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                      </button>
                      <a className="navbar-brand" href="#">Motel Arcoiris</a>
                  </div>
                 
                  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul className="nav navbar-nav">
                          <li>
                              <a href="/">Home</a>
                          </li>
                          <li>
                              <a href="/habitacion">Habitacion</a>
                          </li>
                          <li>
                              <a href="#">Contact</a>
                          </li>
                          <li>
                              <a href="/admin/habitaciones">Habitaciones ADMIN</a>
                          </li>
                      </ul>
                  </div>
              
              </div>
           
            </nav>
          </div>
  
      { this.props.contenido() }
    
       

       
        <footer>

                <div className="col-lg-12">
                    <p className="text-center">Copyright &copy; Your Website 2014</p>
                </div>
           
         
        </footer>

 

         
      </div>
    );
  }
}