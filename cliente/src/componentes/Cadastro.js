import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const cadastra = gql`
mutation adicionaLivro($id: ID!, $titulo: String!, $autor: String!) {
  cadastraLivro(id: $id, titulo: $titulo, autor: $autor)
}`

const Cadastro = () => {
  let id
  let titulo
  let autor
  let resultado = null

  return (
    <Mutation mutation={cadastra}>
      {
        (cadastra, { loading, error, data }) => {
          let btCadastrar
          resultado = null

          if (loading)
            btCadastrar = <button type='submit' disabled>Cadastrando...</button>
          else
            btCadastrar = <button type='submit'>Cadastrar</button>

          if (error)
            resultado = <h3>Erro!</h3>

          if (id !== undefined)
            if (data !== undefined)
              if (data.cadastraLivro) {
                resultado = <h4>Livro cadastrado com sucesso!</h4>
                id.value = ''
                titulo.value = ''
                autor.value = ''
              }
              else
                resultado = <h4>Já existe livro com este ID</h4>

          return (
          <div style={{border: 'solid 1px'}}>
            <h3>Cadastrar Livro</h3>
            <form onSubmit={ev => {
              ev.preventDefault()
              const vars = {
                variables: {
                  id: id.value,
                  titulo: titulo.value,
                  autor: autor.value
                }
              }
              cadastra(vars)
            }}>
              <label>ID:</label><br/>
              <input ref={node => {id = node}}/>
              <br/>
              <label>Título:</label><br/>
              <input ref={node => {titulo = node}}/>
              <br/>
              <label>Autor:</label><br/>
              <input ref={node => {autor = node}}/>
              <br/>
              {btCadastrar}
              <button type='reset'>Limpar</button>
            </form>
            {resultado}
          </div>
        )
      }
      }
    </Mutation>
  )
}

export default Cadastro
