import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actionCreators';

function AddTodo({ addTodo }) {
  const [todoContent, setTodoContent] = useState('');

  const handleChange = e => setTodoContent(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(todoContent);
    setTodoContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="add-todo">
        <input name="add-todo" value={todoContent} onChange={handleChange} />
      </label>
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default connect(
  null,
  { addTodo }
)(AddTodo);
