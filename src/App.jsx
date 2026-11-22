import { TasksProvider } from './context/TasksContext';
import { TaskForm } from './components/tasks/TaskForm';
import { TaskList } from './components/tasks/TaskList';
import { TaskFilters } from './components/tasks/TaskFilters';

function App() {
  return (
    <TasksProvider>
      <div className="app">
        <header className="app__header">
          <h1 className="app__title">Gestor de Tareas Inclusivo</h1>
          <p className="app__subtitle">
            Organiza tus tareas de forma accesible
          </p>
        </header>

        <main>
          <TaskForm />
          <TaskFilters />
          <TaskList />
        </main>
      </div>
    </TasksProvider>
  );
}

export default App;
