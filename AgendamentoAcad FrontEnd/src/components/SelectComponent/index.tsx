/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, {
  useEffect,
  useRef,
} from 'react';
import Select, { OptionTypeBase, Props as SelectProps } from 'react-select';

import { useField } from '@unform/core';
import { Container } from './styles';

interface SelectComponentProps extends SelectProps<OptionTypeBase> {
  name: string;
}
const options = [
  { value: 'Epitacio Pessoa', label: 'Epitacio Pessoa' },
  { value: 'Mag Shopping', label: 'Mag Shopping' },
  { value: 'Casa do zé bedeu', label: 'Casa do zé bedeu' },
  { value: 'Planalto Central', label: 'Planalto Central' },
];
const SelectComponent: React.FC<SelectComponentProps> = ({ name, ...rest }) => {
  const selectRef = useRef(null);
  const {
    fieldName, defaultValue, registerField, error,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);
  return (
    <Container>
      {/* <select
        id="local"
        ref={selectRef}
        name="local"
        // onChange={handleSelect}
      >
        <option value="" disabled selected hidden>Selecione a Unidade </option>
        <option value="Epitacio Pessoa">Epitacio Pessoa</option>
        <option value="Mag Shopping">Mag Shopping</option>
        <option value="Casa do zé bedeu">Casa do zé bedeu</option>
        <option value="Planalto Central">Planalto Central</option>
      </select> */}

      <Select defaultValue={defaultValue} ref={selectRef} classNamePrefix="react-select" options={options} isClearable isSearchable {...rest} />
    </Container>
  );
};

export default SelectComponent;
