import { useTasks } from '../../context/TasksContext';

const filters = [
  { key: 'all', label: 'Todas' },
  { key: 'active', label: 'Pendientes' },
  { key: 'completed', label: 'Completadas' },
];

export function TaskFilters() {
  const { filter, setFilter } = useTasks();

  return (
    <div className="filters" role="group" aria-label="Filtrar tareas">
      {filters.map(({ key, label }) => (
        <button
          key={key}
          type="button"
          className="filters__btn"
          aria-pressed={filter === key}
          onClick={() => setFilter(key)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
