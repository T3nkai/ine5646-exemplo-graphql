import React from 'react'
import { Query } from "react-apollo"
import gql from "graphql-tag"

const consulta = gql`
  {
    livros {
      id
      titulo
    }
  }
  `

const Titulos = () => (
  <Query query={consulta} notifyOnNetworkStatusChange>
    {
      ({loading, error, data, refetch}) => {
        let titulos
        if (loading)
          titulos = <h3>Pesquisando...</h3>
        else
          if (error)
            titulos = <h5>Erro!</h5>
          else {
            const resposta =  data.livros.map(({id, titulo}) =>
                          (<li key={id}>[{id}] : {titulo}</li>))
            titulos =
            <span>
              <button onClick={() => refetch()}>Atualizar</button>
              <ol>{resposta}</ol>
            </span>
          }
        return (
          <div>
            <h3>Resultado da Pesquisa por Todos os Títulos</h3>
            {titulos}
          </div>
        )
      }
    }
  </Query>
)

export default Titulos;
