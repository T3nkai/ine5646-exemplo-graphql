// Representa um Banco de Dados Fictício
// Os dados estão armazenados em memória.

const livros = new Map()

livros.set('ab345',
  {
    id: 'ab345',
    titulo: "Harry Potter and the Sorcerer's stone",
    autor: 'J.K. Rowling',
  })
  livros.set('2de4',
    {
      id: '2de4',
      titulo: 'Jurassic Park',
      autor: 'Michael Crichton',
    })

const banco = {
  pesquisaLivroPorId : (id) => {
    let livro = livros.get(id)

    if (livro === undefined)
      livro = null
    else
      livro = copia(livro)

    return livro
  },

  pesquisaTodosLivros : () =>
    Array
      .from(livros.values())
      .map(livro => copia(livro)),

  cadastraLivro : (id, titulo, autor) => {
    let cadastrou = false
    if (livros.get(id) === undefined) {
      livros.set(id , {id, titulo, autor})
      cadastrou = true
    }
    return cadastrou
  }
}

// retorna uma cópia do livro
const copia = ({id, titulo, autor}) => ({id, titulo, autor})



export default banco
