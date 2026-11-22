import { createContext, useContext, useEffect, useReducer } from 'react';
import { loadTasks, saveTasks } from '../utils/storage';
import { generateId } from '../utils/id';

const TasksContext = createContext(null);
const initialState = { tasks: [], filter: 'all' };

function tasksReducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: generateId(),
            title: action.payload.title,
            description: action.payload.description || '',
            completed: false,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.payload ? { ...t, completed: !t.completed } : t
        ),
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.payload),
      };
    case 'EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.payload.id ? { ...t, ...action.payload.changes } : t
        ),
      };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    case 'LOAD_TASKS':
      return { ...state, tasks: action.payload };
    default:
      return state;
  }
}

export function TasksProvider({ children }) {
  const [state, dispatch] = useReducer(tasksReducer, initialState);

  useEffect(() => {
    const saved = loadTasks();
    if (saved.length > 0) dispatch({ type: 'LOAD_TASKS', payload: saved });
  }, []);

  useEffect(() => {
    saveTasks(state.tasks);
  }, [state.tasks]);

  const value = {
    tasks: state.tasks,
    filter: state.filter,
    addTask: (title, description) =>
      dispatch({ type: 'ADD_TASK', payload: { title, description } }),
    toggleTask: (id) => dispatch({ type: 'TOGGLE_TASK', payload: id }),
    deleteTask: (id) => dispatch({ type: 'DELETE_TASK', payload: id }),
    editTask: (id, changes) =>
      dispatch({ type: 'EDIT_TASK', payload: { id, changes } }),
    setFilter: (filter) => dispatch({ type: 'SET_FILTER', payload: filter }),
    filteredTasks: state.tasks.filter((t) => {
      if (state.filter === 'active') return !t.completed;
      if (state.filter === 'completed') return t.completed;
      return true;
    }),
  };

  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>;
}

export function useTasks() {
  const ctx = useContext(TasksContext);
  if (!ctx) throw new Error('useTasks debe usarse dentro de TasksProvider');
  return ctx;
}
