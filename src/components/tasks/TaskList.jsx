import { useTasks } from '../../context/TasksContext';
import { TaskItem } from './TaskItem';

export function TaskList() {
  const { filteredTasks, filter } = useTasks();

  if (filteredTasks.length === 0) {
    const messages = {
      all: 'No hay tareas todavía. ¡Crea la primera!',
      active: 'No hay tareas pendientes. ¡Buen trabajo!',
      completed: 'Aún no has completado ninguna tarea.',
    };
    return (
      <p className="empty-state" role="status">
        {messages[filter]}
      </p>
    );
  }

  return (
    <ul className="task-list" aria-live="polite">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
