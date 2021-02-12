/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { MdCheckCircle } from 'react-icons/md';
import Header from '../../components/Header';

import {
  Container, Content, Background,
} from './styles';
import api from '../../services/api';

interface schedulingData {
    clientName : string;
    selectedHour : string;
    ParsedDate: string;
    localAgendamento: string;
}
// localStorage.setItem('@AppointmentGym:data', JSON.stringify(formData)); {} as schedulingData

const Confirmed: React.FC = () => {
  const [Appointmentdata, setAppointmentdata] = useState<schedulingData>(() => {
    const formData = localStorage.getItem('@AppointmentGym:data');
    if (formData) {
      return (JSON.parse(formData));
    }
    return {} as schedulingData;
  });

  console.log(Appointmentdata);
  return (
    <>
      <Header />

      <Container>
        <Content>
          <div>

            <MdCheckCircle size={120} />
            <h1>{`RESERVA REALIZADA, ${Appointmentdata.clientName} `}</h1>

            <h2>
              {`ESPERAMOS VOCÊ NO DIA ${Appointmentdata.ParsedDate} as ${Appointmentdata.selectedHour}`}
            </h2>
            <h2>
              {` NA UNIDADE: ${Appointmentdata.localAgendamento}`}
            </h2>
          </div>
        </Content>

        <Background />
      </Container>

    </>
  );
};
export default Confirmed;
