import React from 'react';

class FormularioSexoCliente extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Sexo cliente: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <fieldset>
                <legend>Formulário confirmar sexo cliente:</legend>            
                <label>
                    Masculino:
                    <input type="radio" name="sexo-cliente" value="masculino" checked={this.state.value === 'masculino'} onChange={this.handleChange} />                
                </label>
                <label>
                    Feminino:
                    <input type="radio" name="sexo-cliente" value="feminino" checked={this.state.value === 'feminino'} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Enviar" />
          </fieldset>
        </form>
      );
    }
  }

  export default FormularioSexoCliente