import { addDays, format } from 'date-fns';
import React, { useEffect, useRef, useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './DatePicker.css';

export interface DatePickerProps {
  className?: string | any;
  to: any;
}

const DatePicker = (props: DatePickerProps) => {
  const [range, setRange] = useState([
    {
      startDate: addDays(new Date(), -1),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const [open, setOpen] = useState(false);

  const refDate = useRef<any>(null);
  const valueRef = useRef<any>(null);

  useEffect(() => {
    document.addEventListener('keydown', hideOnescape, true);
    document.addEventListener('click', hideOnClickOutside, true);
  }, []);

  const hideOnescape = (e: any) => {
    // eslint-disable-next-line
    console.log(e.key);
    if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  const hideOnClickOutside = (e: any) => {
    if (refDate.current && !refDate.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <div className={'calendarWrap ' + props.className}>
      <input
        ref={valueRef}
        value={`${format(range[0].startDate, 'dd/yyyy')} ${props.to} ${format(
          range[0].endDate,
          'dd/yyyy'
        )}`}
        readOnly
        id="inputBox"
        className="inputBox"
        onClick={() => setOpen((open) => !open)}
      />
      <div style={{ position: 'absolute' }} ref={refDate}>
        {open && (
          <DateRange
            onChange={(item: any) => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            months={1}
            ranges={range}
            direction="horizontal"
            weekStartsOn={1}
            rangeColors={['#f33f3f']}
            minDate={new Date(1990, 1, 0)}
            maxDate={new Date()}
          />
        )}
      </div>
    </div>
  );
};

export default DatePicker;
