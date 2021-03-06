import { InputHandles } from './types';

const Input: React.FC<InputHandles> = ({
  label,
  error,
  ...rest
}) => (
  <div className="input">
    <span className="text-gray-400 text-xs">
      {label}
    </span>
    <input
      {...rest}
      className="input-target"
    />

    {error && (
      <span className="input-error">
        {error}
      </span>
    )}
  </div>
);

export default Input;
