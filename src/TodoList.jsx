import React from 'react';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Todo from './Todo';
function TodoList({ editTodo, toggleTodo, removeTodo, todos }) {
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, index) => (
            <div key={todo.id}>
              <Todo
                {...todo}
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}
                editTodo={editTodo}
              />
              {index < todos.length - 1 ? <Divider /> : ''}
            </div>
          ))}
        </List>
      </Paper>
    );
  return null;
}

export default TodoList;
