import React from 'react';

class FormularioCompra extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          nome: '',
          contrato: false,
          endereco: '',
          pagamento: 'dinheiro'
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }
  
    handleSubmit(event) {
      alert(
          'Nome:' + this.state.nome + 
          '\nSexo:' + this.state.sexo + 
          '\nEndereço: ' + this.state.endereco +
          '\nPagamento: ' + this.state.pagamento +
          '\nContrato:' + this.state.contrato 
          );
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <fieldset>
                <legend>Formulário compra:</legend>            
                <label>
                    Nome cliente:
                    <input name="nome" value={this.state.nome} onChange={this.handleChange} />
                </label>
                <label>
                    Masculino:
                    <input type="radio" name="sexo" value="masculino" checked={this.state.sexo === 'masculino'} onChange={this.handleChange} />                
                </label>
                <label>
                    Feminino:
                    <input type="radio" name="sexo" value="feminino" checked={this.state.sexo === 'feminino'} onChange={this.handleChange} />
                </label>
                <label>
                    Endereço entrega:
                    <textarea name="endereco" value={this.state.endereco} onChange={this.handleChange} />
                </label>
                <label>
                    Forma pagamento:
                    <select value={this.state.pagamento} onChange={this.handleChange}>
                        <option value="debito">Cartão de débito</option>
                        <option value="credito">Cartão de crédito</option>
                        <option value="cheque">Cheque</option>
                        <option value="dinheiro">Dinheiro</option>
                    </select>
                </label>
                <label>
                    Li e entendi o contrato:
                    <input type="checkbox" name="contrato" checked={this.state.contrato} onChange={this.handleChange} />                
                </label>                

                <input type="submit" value="Enviar" />
          </fieldset>
        </form>
      );
    }
  }

  export default FormularioCompra