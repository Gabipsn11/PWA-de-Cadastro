const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Rota para cadastrar um novo livro
router.post('/books', bookController.createBook);

// Rota para listar todos os livros
router.get('/books', bookController.getAllBooks);

// Rota para obter um livro específico
router.get('/books/:id', bookController.getBookById);

// Rota para atualizar um livro
router.put('/books/:id', bookController.updateBook);

// Rota para excluir um livro
router.delete('/books/:id', bookController.deleteBook);

module.exports = router;
