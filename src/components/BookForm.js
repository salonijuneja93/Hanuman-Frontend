import React, { useState } from 'react';
import { api } from '../api';
import './BookForm.css'
function BookForm({ refreshBooks }) {
  const [formData, setFormData] = useState({ title: '', author: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/', formData);
    refreshBooks();
    setFormData({ title: '', author: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Book Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <input
        name="author"
        placeholder="Author"
        value={formData.author}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default BookForm;
