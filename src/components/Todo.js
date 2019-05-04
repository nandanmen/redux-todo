import React from 'react';
import { string } from 'prop-types';

const makeStyle = isComplete =>
  isComplete ? { textDecoration: 'line-through' } : null;

function Todo({ content, isComplete }) {
  return <div style={makeStyle(isComplete)}>{content}</div>;
}

Todo.propTypes = {
  content: string.isRequired
};

export default Todo;
