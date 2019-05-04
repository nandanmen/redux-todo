import React from 'react';
import { useSelector } from 'react-redux';
import { arrayOf, shape, number, string, bool } from 'prop-types';
import Todo from './Todo';

function TodoList() {
  const todos = useSelector(state => state.todos);
  return (
    <div>
      {todos && todos.length
        ? todos.map(todo => <Todo key={todo.id} {...todo} />)
        : 'Nothing to do!'}
    </div>
  );
}

TodoList.propTypes = {
  todos: arrayOf(
    shape({
      id: number,
      content: string,
      isCompleted: bool
    })
  )
};

TodoList.defaultProps = {
  todos: []
};

export default TodoList;
