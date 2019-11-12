import React from 'react';

class FormularioConfirmarContrato extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: false};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.checked});
    }
  
    handleSubmit(event) {
      alert('Confirma contrato: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <fieldset>
                <legend>Formulário confirmar contrato:</legend>            
                <label>
                    CheckBox:
                    <input type="checkbox" checked={this.state.value} onChange={this.handleChange} />                
                </label>
                <input type="submit" value="Enviar" />
          </fieldset>
        </form>
      );
    }
  }

  export default FormularioConfirmarContrato