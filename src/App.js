import React, { Component } from 'react';

import './App.css';

import Banner from './Componentes/Banner';
import Listado from './Componentes/Listado';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Banner  />
        </header>
         <Listado/> 
      </div>
    );
  }
}
export default App;
