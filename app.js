const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');
const app = express();
const PORT = process.env.PORT || 5000;

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/bookstore', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Middleware para permitir JSON
app.use(express.json());

// Usar as rotas de livros
app.use('/api', bookRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
