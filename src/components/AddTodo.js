import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actionCreators';

function AddTodo() {
  const dispatch = useDispatch();
  const [todoContent, setTodoContent] = useState('');

  const handleChange = e => setTodoContent(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTodo(todoContent));
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

export default AddTodo;
