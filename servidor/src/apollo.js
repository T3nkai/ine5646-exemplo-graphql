import { makeExecutableSchema } from 'graphql-tools'
import banco from './mockDB'


// The GraphQL schema in string form
const typeDefs = `
  type Query { livros: [Livro], livro (id: ID!): Livro }
  type Livro { id: ID, titulo: String, autor: String }
  type Mutation {
    cadastraLivro (id: ID!, titulo: String!, autor: String!): Boolean
  }
`

// The resolvers
const resolvers = {
  Query: {
    livros: () => banco.pesquisaTodosLivros(),
    livro: (root, {id}) => banco.pesquisaLivroPorId(id)
  },
  Mutation: {
    cadastraLivro: (root, {id, titulo, autor}) => banco.cadastraLivro(id, titulo, autor)
  }
}

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

export default schema
