import React from 'react'
import Titulo from './Titulo'
import Titulos from './Titulos'

class Pesquisa extends React.Component {
  state = {
    pesquisou: false,
    id: undefined
  }

  fechePesquisa = () => {
    this.setState({pesquisou: false, id: undefined})
  }

  registreID = (ev) => {
    const id = ev.target.value
    this.setState({id})
  }

  pesquisePorID = () => {
    this.setState({pesquisou: true})
  }

  pesquiseTodos = () => {
    this.setState({id: undefined, pesquisou: true})
  }

  render() {
    let conteudo

    if (!this.state.pesquisou)
      conteudo = <div>
    <h3>Pesquisar Livro</h3>
    <button onClick={this.pesquiseTodos}>Pesquisar Todos </button>
    <br/>
    <form onSubmit={this.pesquisePorID}>
      <label>
        ID do Livro:
      </label><br/>
      <input type='text'  onChange={this.registreID}/>
      <input type='submit' value='Pesquisar por ID'/>
    </form>
  </div>
  else {
    const btFechar = <button onClick={this.fechePesquisa}>Fechar</button>
    if (this.state.id === undefined)
      conteudo = <span><Titulos/>{btFechar}</span>
    else
      conteudo = <span><Titulo id={this.state.id}/>{btFechar}</span>
}
  return (<div style={{border: 'solid 1px'}}>{conteudo}</div>)
  }
}

export default Pesquisa
