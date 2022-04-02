import { useState } from 'react';

import Input from '../input';

const Select: React.FC = ({
  label,
  options,
  selected,
}) => {
  const [focus, onFocus] = useState(false);

  return (
    <div className="select">
      <Input
        value={selected}
        label={label}
        onFocus={() => onFocus(true)}
        onBlur={() => onFocus(false)}
      />
      <div className={`select-options ${focus ? 'is-opened' : ''}`}>
        {options.map((option) => (
          <span
            key={option}
          >
            {option}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Select;
