/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useRef, useEffect } from 'react';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useField } from '@unform/core';

import { Container } from './styles';

interface DatePickDATA extends Omit<ReactDatePickerProps, 'onChange'> {
    name : string;
}
const DatePick: React.FC<DatePickDATA> = ({ name, ...rest }) => {
//   const hj: Date = new Date(props);
  const datepickerRef = useRef(null);
  const {
    fieldName, registerField, defaultValue, error,
  } = useField(name);
  const [date, setDate] = useState(defaultValue || null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      path: 'props.selected',
      clearValue: (ref: any) => {
        ref.clear();
      },
    });
  }, [fieldName, registerField]);
  return (

    <>
      <Container>
        <DatePicker
          ref={datepickerRef}
          placeholderText="Month / Day / Year"
          selected={date}
          onChange={setDate}
          {...rest}
        />
      </Container>

    </>
  );
};

export default DatePick;
