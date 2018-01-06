import React from 'react'
import '../../imports/stylesheets/Carousel.css'

class Home extends React.Component {
  render() {
    return (
	        <header id="myCarousel" className="carousel slide">
      
		        <ol className="carousel-indicators">
		            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
		            <li data-target="#myCarousel" data-slide-to="1"></li>
		            <li data-target="#myCarousel" data-slide-to="2"></li>
		        </ol>

		  
		        <div className="carousel-inner">
		            <div className="item active">
		               
		                <img className="fill" src="http://i1146.photobucket.com/albums/o539/keopocoke/motel_zpsdfelw8aw.jpg"/>
		                <div className="carousel-caption">
		                    <h2>Caption 1</h2>
		                </div>
		            </div>
		            <div className="item">
		              
		           		<img className="fill" src="http://placehold.it/1900x1080&text=Slide Two"/>    
		                <div className="carousel-caption">
		                    <h2>Caption 2</h2>
		                </div>
		            </div>
		            <div className="item">
		             
		            	<img className="fill" src="http://placehold.it/1900x1080&text=Slide Three"/>   
		                <div className="carousel-caption">
		                    <h2>Caption 3</h2>
		                </div>
		            </div>
		        </div>

		       
		        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
		            <span className="icon-prev"></span>
		        </a>
		        <a className="right carousel-control" href="#myCarousel" data-slide="next">
		            <span className="icon-next"></span>
		        </a>

		    </header>
    )
  }
}

export default Home;