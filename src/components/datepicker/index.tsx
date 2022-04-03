import DatePicker from 'react-datepicker';

import Input from '../input';
import { DatepickerHandles } from './types';

const Datepicker: React.FC<DatepickerHandles> = ({
  label,
  start,
  onStart,
  placeholder,
}) => (
  <DatePicker
    selected={start}
    onChange={(date) => onStart(date)}
    customInput={<Input label={label} placeholder={placeholder} />}
  />
);

export default Datepicker;
