document.addEventListener('DOMContentLoaded', () => {
    const bookForm = document.getElementById('book-form');
    const bookList = document.getElementById('book-list');

    // Função para carregar livros do localStorage
    function loadBooks() {
        const books = JSON.parse(localStorage.getItem('books')) || [];
        books.forEach(book => addBookToList(book));
    }

    // Função para adicionar um livro à lista e ao localStorage
    function addBookToList(book) {
        const li = document.createElement('li');
        li.classList.add('book-item');

        li.innerHTML = `
            <div class="book-info">
                <h3>${book.title}</h3>
                <p><strong>Autor:</strong> ${book.author}</p>
                <p><strong>Descrição:</strong> ${book.description}</p>
            </div>
            <img src="${book.coverUrl}" alt="Capa do livro">
            <button class="delete-button">Deletar Livro</button>
        `;

        // Adiciona o item à lista de livros
        bookList.appendChild(li);

        // Adiciona um evento para o botão de deletar
        li.querySelector('.delete-button').addEventListener('click', () => {
            removeBookFromList(book.title); // Remove do localStorage
            bookList.removeChild(li); // Remove do DOM
        });
    }

    // Função para remover um livro do localStorage
    function removeBookFromList(title) {
        const books = JSON.parse(localStorage.getItem('books')) || [];
        const updatedBooks = books.filter(book => book.title !== title);
        localStorage.setItem('books', JSON.stringify(updatedBooks));
    }

    // Adiciona um livro e atualiza o localStorage
    bookForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Obtém os valores dos campos do formulário
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const description = document.getElementById('description').value;
        const coverUrl = document.getElementById('coverUrl').value;

        const newBook = {
            title,
            author,
            description,
            coverUrl
        };

        // Adiciona o livro à lista e ao localStorage
        addBookToList(newBook);
        const books = JSON.parse(localStorage.getItem('books')) || [];
        books.push(newBook);
        localStorage.setItem('books', JSON.stringify(books));

        // Limpa o formulário
        bookForm.reset();
    });

    // Carrega os livros ao inicializar
    loadBooks();
});
