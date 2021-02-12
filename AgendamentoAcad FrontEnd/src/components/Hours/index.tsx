/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import { Container, HourB } from './styles';

interface HoursProps {
    name: string,

}
interface HourButtonProps {
    hora: string,
    selected: boolean,
}
const Hours : React.FC<HoursProps> = ({ name }) => {
  const Horaref = useRef(null);
  const {
    fieldName, defaultValue, registerField, error,
  } = useField(name);
  const [FinalHour, setFinalHour] = useState(' ');
  const [selectedHour, setSelectedHour] = useState<HourButtonProps[]>([
    { hora: '06:00', selected: false },
    { hora: '07:15', selected: false },
    { hora: '08:30', selected: false },
    { hora: '09:45', selected: false },
    { hora: '11:00', selected: false },
    { hora: '12:15', selected: false },
    { hora: '13:30', selected: false },
    { hora: '14:45', selected: false },
    { hora: '16:00', selected: false },
    { hora: '17:15', selected: false },
    { hora: '18:30', selected: false },
    { hora: '19:45', selected: false },
    { hora: '21:00', selected: false },
  ]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: Horaref.current,
      path: 'value',
    });
  }, [fieldName, registerField, FinalHour]);

  const handleClick = (index : number): void => {
    // Copia o state p uma variavel
    const horas = [...selectedHour];

    // Acha o state da hora que clicou
    const hora = { ...horas[index] };

    // Atualiza o state da hora selecionada
    setFinalHour(hora.hora);
    !hora.selected ? hora.selected = true : hora.selected = false;

    const ExclusiveHours = horas.map((Hr : HourButtonProps) => (
      (hora.hora === Hr.hora)
        ? ({ hora: Hr.hora, selected: true })
        : ({ hora: Hr.hora, selected: false })
    ));
    horas[index] = hora;
    setSelectedHour(ExclusiveHours);
  };

  return (
    <>

      <Container>
        {selectedHour.map((h, index) => (
          <HourB key={h.hora} type="button" isSelected={h.selected} onClick={() => handleClick(index)} value={h.hora}>{h.hora}</HourB>
        ))}

        {/* <HourButton onClick={() => handleClick('12:00')} value="12:00">
  12:00
</HourButton> */}

      </Container>

      <input type="hidden" ref={Horaref} value={FinalHour} />

    </>
  );
};

export default Hours;
