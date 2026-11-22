import { useState } from 'react';
import { useTasks } from '../../context/TasksContext';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

export function TaskForm() {
  const { addTask } = useTasks();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) {
      setError('El título es obligatorio');
      return;
    }
    addTask(trimmed, description.trim());
    setTitle('');
    setDescription('');
    setError('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit} noValidate>
      <h2 className="task-form__title">Nueva tarea</h2>
      <Input
        label="Título *"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          if (error) setError('');
        }}
        error={error}
        placeholder="Ej: Comprar leche"
        required
      />
      <Input
        label="Descripción (opcional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Detalles adicionales..."
      />
      <Button type="submit">Añadir tarea</Button>
    </form>
  );
}
