import React from 'react';
import { api } from '../api';
import './BookList.css';

function BookList({ books, refreshBooks }) {
  const handleDelete = async (id) => {
    await api.delete(`/${id}`);
    refreshBooks();
  };

  const handleUpdate = async (id, status) => {
    await api.put(`/${id}`, { status });
    refreshBooks();
  };

  return (
    <div>
      <table className="book-list-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td className={`status ${book.status === 'Unread' ? 'unread' : ''}`}>
                {book.status}
              </td>
              <td>
                {book.status === 'Unread' && (
                  <button onClick={() => handleUpdate(book._id, "Read")}>Mark as Read</button>
                )}
                {book.status === 'Read' && (
                  <button onClick={() => handleUpdate(book._id, "Unread")}>Mark as Unread</button>
                )}
                <button onClick={() => handleDelete(book._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookList;
