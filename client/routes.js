

import React from 'react'
import {mount} from 'react-mounter'

import Layout from './comun/layout.jsx'
import Home   from './components/home'
import Habitaciones  from './components/habitaciones'
import Habitacion from './components/habitacion'

FlowRouter.route('/', {
  name: 'home',
  action( params ) {
    console.log('Estamos en HOME');

    mount( Layout, {
      contenido: function() { return (<Home />) },
      saludar  : "Hola, esta propiedad está disponible en Layout"
    });
    
  }
});

FlowRouter.route('/habitacion', {
  name: 'habitacion',
  action( params ) {
    
    mount( Layout, {
      contenido: function() { return (<Habitacion />) },
      saludar  : "Hola, esta propiedad está disponible en Layout"
    });
    
  }
});

FlowRouter.route('/admin/habitaciones', {
  name: 'habitaciones',
  action( params ) {
    
    mount( Layout, {
      contenido: function() { return (<Habitaciones />) },
      saludar  : "Hola, esta propiedad está disponible en Layout"
    });
    
  }
});