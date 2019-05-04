import React from 'react';
import { connect } from 'react-redux';
import { arrayOf, shape, number, string, bool } from 'prop-types';
import Todo from './Todo';

function TodoList({ todos }) {
  return (
    <div>
      {todos && todos.length
        ? todos.map(todo => <Todo key={todo.id} {...todo} />)
        : 'Nothing to do!'}
    </div>
  );
}

function mapStateToProps(state) {
  return { todos: state.todos };
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

export default connect(mapStateToProps)(TodoList);
