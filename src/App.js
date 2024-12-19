import React, { useState, useEffect } from 'react';
import { api } from './api';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const res = await api.get('/');
    setBooks(res.data);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Book Library App</h1>
      <BookForm refreshBooks={fetchBooks} />
      <BookList books={books} refreshBooks={fetchBooks} />
    </div>
  );
}

export default App;
