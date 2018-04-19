import React from 'react'
import ReactDOM from 'react-dom'
import App from './componentes/App'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const cliente = new ApolloClient({uri: 'https://localhost:3001/graphql'})

const AppApollo = () => (
  <ApolloProvider client={cliente}>
    <App />
  </ApolloProvider>
)

ReactDOM.render(<AppApollo/>, document.getElementById('root'))
