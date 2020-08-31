import * as React from 'react';
import DatePicker from '@synerise/ds-date-picker/dist/DatePicker';
import { InputProps } from '../../Factors.types';

const DateInput: React.FC<InputProps> = ({ value, onChange }) => {
  const changeHandler = React.useCallback(
    (date: Date | undefined) => {
      onChange(date);
    },
    [onChange]
  );

  return (
    <DatePicker
      onApply={changeHandler}
      value={value as Date}
      showTime
      useStartOfDay
      texts={{ apply: 'Apply', clearTooltip: 'Clear', inputPlaceholder: 'Select date', now: 'Now' }}
      disabledHours={[]}
      disabledMinutes={[]}
      disabledSeconds={[]}
    />
  );
};

export default DateInput;
