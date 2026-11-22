import { useId } from 'react';

export function Input({ label, error, ...props }) {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div className="input-group">
      {label && (
        <label htmlFor={id} className="input-group__label">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`input-group__input ${error ? 'input-group__input--error' : ''}`}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? errorId : undefined}
        {...props}
      />
      {error && (
        <span id={errorId} className="input-group__error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
