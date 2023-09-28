const { addBookByIdHandler, getAllBookByIdHandler, getBookByIdHandler, editBookByIdHandler, deleteBookByIdHandler } = require('./handler')

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookByIdHandler
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBookByIdHandler
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookByIdHandler
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler
  }
]

module.exports = routes
