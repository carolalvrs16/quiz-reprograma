import classNames from 'classnames';

import { RadioHandles } from './types';

const Radio: React.FC<RadioHandles> = ({
  error,
  label,
  className,
  ...rest
}) => {
  const styled = classNames(
    'radio',
    className,
    error && 'is-error',
    rest.checked && 'is-checked',
    rest.disabled && 'is-disabled',
  );

  return (
    <div
      className={styled}
      aria-checked={rest.checked}
    >
      <div className="radio-wrapper">
        <input
          {...rest}
          id="radio"
          type="radio"
          className="radio-target"
        />
        <span className="radio-box" />
        <label
          htmlFor="radio"
          className="radio-label"
        >
          {label}
        </label>
      </div>
    </div>
  );
};

export default Radio;
