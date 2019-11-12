import React from 'react';

class FormularioFormaPagamento extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'dinheiro'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Forma pagamento: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <fieldset>
                <legend>Formulário forma pagamento:</legend>            
                <label>
                    Select:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="debito">Cartão de débito</option>
                        <option value="credito">Cartão de crédito</option>
                        <option value="cheque">Cheque</option>
                        <option value="dinheiro">Dinheiro</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
          </fieldset>
        </form>
      );
    }
  }

  export default FormularioFormaPagamento