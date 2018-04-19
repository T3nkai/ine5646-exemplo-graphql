import React from 'react'
import { Query } from "react-apollo"
import gql from "graphql-tag"

const consulta = gql`
  query livro($id: ID!) {
    livro (id: $id) {
      id
      titulo
    }
  }
  `

const Titulo = ({id}) => (
  <Query query={consulta} variables={{id}}>
    {
      ({loading, error, data}) => {
        let titulo
        if (loading)
          titulo = <h3>Pesquisando...</h3>
        else
          if (error)
            titulo = <h5>Erro!</h5>
          else
            if (data.livro === null)
              titulo = <p>Não há livro com  ID {id}</p>
            else
              titulo =  <p>Título: {data.livro.titulo}</p>

        return (
          <div>
            <h3>Resultado para Pesquisa de Livro com ID {id}</h3>
            {titulo}
          </div>
        )
      }
    }
  </Query>

)

export default Titulo
