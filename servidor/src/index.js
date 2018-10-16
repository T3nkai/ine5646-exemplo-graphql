import https from 'https'
import fs from 'fs'
import path from 'path'

import express from 'express'

import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'

import schema  from './apollo'

const opcoes = {
  key: fs.readFileSync(path.join(__dirname, '../cert/key.pem')),
  cert: fs.readFileSync(path.join(__dirname, '../cert/cert.pem'))
}

const app = express()

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

const server = https.createServer(opcoes, app)

server.listen(3000, () => {
  console.log('Vá para https://localhost:3000/graphiql para executar consultas!')
})
