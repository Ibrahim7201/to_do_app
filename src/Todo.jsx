import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CheckBox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
function Todo({ editTodo, toggleTodo, id, task, completed, removeTodo }) {
  const [isEditing, toggle] = useToggleState();
  return (
    <div>
      <ListItem style={{ height: '64px' }}>
        {isEditing ? (
          <EditTodoForm
            id={id}
            editTodo={editTodo}
            task={task}
            toggleEditForm={toggle}
          />
        ) : (
          <>
            <CheckBox
              tabIndex={-1}
              checked={completed}
              onClick={() => toggleTodo(id)}
            />
            <ListItemText
              style={{ textDecoration: completed ? 'line-through' : 'none' }}
            >
              {task}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                <DeleteIcon />
              </IconButton>
              <IconButton aria-label="Edit" onClick={toggle}>
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </>
        )}
      </ListItem>
    </div>
  );
}

export default Todo;
