import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormularioNome from './FormularioNome';
import FormularioTexto from './FormularioTexto';
import FormularioFormaPagamento from './FormularioFormaPagamento';
import FormularioConfirmarContrato from './FormularioConfirmarContrato';
import FormularioSexoCliente from './FormularioSexoCliente';
import FormularioCompra from './FormularioCompra';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <FormularioNome />
      <FormularioTexto />
      <FormularioFormaPagamento />
      <FormularioConfirmarContrato />
      <FormularioSexoCliente />
      <FormularioCompra />
    </div>
  );
}

export default App;
