import { useState } from 'react';

import Input from '../input';
import { SelectHandles } from './types';

const Select: React.FC<SelectHandles> = ({
  label,
  options,
  selected,
  className,
  onSelected,
  placeholder,
}) => {
  const [focus, onFocus] = useState(false);

  /**
   * Select option and close dropdown.
   */
  const checked = (option: string) => {
    onSelected(option);

    onFocus(false);
  };

  return (
    <div className={`select ${className || ''}`}>
      <Input
        label={label}
        onFocus={() => onFocus(true)}
        readOnly
        placeholder={placeholder}
        defaultValue={selected}
      />

      <div className={`select-options ${focus ? 'is-opened' : ''}`}>
        {options.map((option) => (
          <span
            key={option}
            role="presentation"
            className="select-option"
            onClick={() => checked(option)}
          >
            {option}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Select;
