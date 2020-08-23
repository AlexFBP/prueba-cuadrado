import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import { ListaEquipos } from './components/listaEquipos/equipos';
import { Partidos } from './components/partidos/partidos';
import { Resultados } from './components/resultados/resultados';

function App() : JSX.Element {
  return (
    <>
    <ListaEquipos />
    <Partidos />
    <Resultados />
    </>
  )
  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  */
}

export default App;
