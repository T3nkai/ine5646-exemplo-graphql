import React from 'react'

const estilo = {
  border: 'solid black 1px'
}

const Cabecalho = () => (
  <div style={estilo}>
    <h5>UFSC - CTC - INE - INE5646</h5>
    <p>Esta aplicação exemplo mostra como usar a biblioteca &nbsp;
          <a href='https://www.apollographql.com/' target='apollo'>Apollo</a>
      , tanto no lado cliente como no lado servidor. Esta  biblioteca
       implementa a
      especificação <a href='https://graphql.org/' target='graphql'>GraphQL</a>.
    </p>
  </div>
)

export default Cabecalho
