/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, {
  useCallback,
  useState,
  InputHTMLAttributes,
  useEffect,
  useRef,
} from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string;
    name: string;
  InputSize?: string;
}
// eslint-disable-next-line react/prop-types
const Input: React.FC<InputProps> = ({
  InputSize,
  title,
  name,
  type,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    fieldName, defaultValue, registerField, error,
  } = useField(name);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);
  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isFilled={isFilled} isFocused={isFocused} InputSize={InputSize}>
      <span>{title}</span>
      <br />
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        type={type}
        ref={inputRef}
        {...rest}
      />
    </Container>
  );
};
export default Input;
