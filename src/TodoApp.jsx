import React, { useEffect } from 'react';
import useTodoState from './hooks/useTodoState';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function TodoApp() {
  const initialTodos = [{ id: 1, task: 'Stop haha', completed: false }];
  const { todos, addTodo, toggleTodo, editTodo, removeTodo } =
    useTodoState(initialTodos);
  //  [
  //   { id: 1, task: 'Clean the house', completed: false },
  //   { id: 2, task: 'Wash Car', completed: true },
  //   { id: 3, task: 'Grow Beard', completed: false },
  // ];

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Paper
        style={{
          padding: 0,
          margin: 0,
          height: '100vh',
          backgroundColor: '#fafafa',
        }}
        elevation={0}
      >
        <AppBar position="static" color="primary" style={{ height: '64px' }}>
          <Toolbar>
            <Typography color="inherit">TODOS WITH HOOKS</Typography>
          </Toolbar>
        </AppBar>
        <Grid container justifyContent={'center'} style={{ marginTop: '1rem' }}>
          <Grid item xs={11} md={8} lg={4}>
            <TodoForm addTodo={addTodo} />
            <TodoList
              toggleTodo={toggleTodo}
              todos={todos}
              removeTodo={removeTodo}
              editTodo={editTodo}
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default TodoApp;
