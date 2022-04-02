import { ButtonHandles } from './types';

const Button: React.FC<ButtonHandles> = ({
  label,
  submit = false,
  disabled = false,
  className = '',
  ...rest
}) => (
  <button
    {...rest}
    type={submit ? 'submit' : 'button'}
    disabled={disabled}
    className={`button ${className || ''}`}
  >
    {label}
  </button>
);

export default Button;
