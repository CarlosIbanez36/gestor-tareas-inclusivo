import { useTasks } from '../../context/TasksContext';

export function TaskItem({ task }) {
  const { toggleTask, deleteTask } = useTasks();
  const checkboxId = `task-${task.id}`;

  return (
    <li className={`task ${task.completed ? 'task--completed' : ''}`}>
      <input
        type="checkbox"
        id={checkboxId}
        className="task__checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        aria-label={`Marcar "${task.title}" como ${task.completed ? 'pendiente' : 'completada'}`}
      />
      <div className="task__content">
        <label htmlFor={checkboxId} className="task__title">
          {task.title}
        </label>
        {task.description && (
          <p className="task__description">{task.description}</p>
        )}
      </div>
      <div className="task__actions">
        <button
          type="button"
          className="task__btn task__btn--danger"
          onClick={() => {
            if (confirm(`¿Eliminar la tarea "${task.title}"?`)) {
              deleteTask(task.id);
            }
          }}
          aria-label={`Eliminar tarea "${task.title}"`}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
}
