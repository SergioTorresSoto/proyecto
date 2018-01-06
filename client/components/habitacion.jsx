import React from 'react'
import '../../imports/stylesheets/imagenHabitacion.css'
class Habitacion extends React.Component {
  render() {
    return (
	   
     <header>
     	<div className="row col-md-12">
     		<div className="row">
	     	 	 <div className="col-md-6 col-sm-8 col-xs-12"><img className="img-responsive" src="http://2.bp.blogspot.com/-H6MAoWN-UIE/TuRwLbHRSWI/AAAAAAAABBk/89iiEulVsyg/s400/Free%2BNature%2BPhoto.jpg" /></div>
	       	</div>
	       	<div className="row">
	       		 <div className="col-md-6 col-sm-8 col-xs-12"><img className="img-responsive" src="http://blog.arborday.org/wp-content/uploads/2013/02/NEC1-300x200.jpg" /></div>
     		</div>
     	</div>
     </header>
     

    )
  }
}

export default Habitacion;