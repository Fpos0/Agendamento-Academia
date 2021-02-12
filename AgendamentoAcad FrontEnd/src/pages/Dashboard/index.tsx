/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-unused-expressions */
import React, {
  useState, useEffect, useRef,
} from 'react';
import { FiCalendar, FiAlertCircle } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Modal } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import moment from 'moment';
import SelectComponent from '../../components/SelectComponent';
import Header from '../../components/Header';
import Hours from '../../components/Hours';
import Input from '../../components/Input';
import DatePick from '../../components/DatePick';
import {
  Container, SelectFranchise, SelectDate, ButtonAg, PopUpConfirm,
} from './styles';
import api from '../../services/api';

interface schedulingData {
    clientName : string;
    selectedHour : string;
    date: Date;
    localAgendamento: string;
}
interface schedulingDataDTO {
    clientName : string;
    selectedHour : string;
    ParsedDate: string;
    localAgendamento: string;
}
//   -------------------------------MODAL------------------------------------------------------

function rand():number {
  return Math.round(Math.random() * 20) - 10;
}
  interface ModalStyleInterface {
      top: string;
      left: string;
      transform: string;
  }
function getModalStyle():ModalStyleInterface {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  paper: {
    position: 'absolute',
    width: 550,
    backgroundColor: theme.palette.background.paper,
    border: '0px solid #000',
    borderRadius: '12px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    alignItems: 'center',

  },
  titleCard: {
    color: '#595959',
    textAlign: 'center',
    fontWeight: 600,
    alignItems: 'center',

  },

}));
  //   -------------------------------MODAL------------------------------------------------------

const Dashboard: React.FC = () => {
// Forma tradicional de armazenar valor do input => cria um estado/state para armazenar o input

  const [formData, setFormData] = useState<schedulingDataDTO>({} as schedulingDataDTO);
  const [rawData, setRawData] = useState<schedulingData>({} as schedulingData);
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  //   const handleSubmit: SubmitHandler<schedulingData> = async (data) => {
  //     try {
  //     //   await api.post('/scheduling', data);
  //       console.log(data);
  //       setFormData(data);

  //       setSucess(true);
  //     } catch (err) {
  //       console.log(err.response.error);
  //     }
  //   };
  //   -------------------------------MODAL------------------------------------------------------

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleConfirmButton = async () => {
    setOpen(false);
    history.push('confirmed');
    // fazer um useEffect p ouvir o confirm p redirecionar a outra pagina

    try {
      await api.post('/scheduling', rawData);
    } catch (err) {
      console.log(err.response.error);
    }
  //   };
  };
  const body = (
    <PopUpConfirm style={modalStyle} className={classes.paper}>
      <FiAlertCircle size={80} />
      <h2 id="confirm-apointment" className={classes.titleCard}>{`${formData.clientName}, Deseja Confirmar o agendamento ?`}</h2>
      <p id="confirm-apointment-description" className={classes.titleCard}>
        {`${formData.ParsedDate} as ${formData.selectedHour} na UNIDADE: ${formData.localAgendamento}`}
      </p>

      <button type="submit" onClick={handleConfirmButton}><span>Confirmar</span></button>

    </PopUpConfirm>
  );
  //   -------------------------------MODAL------------------------------------------------------
  useEffect(() => {
    localStorage.setItem('@AppointmentGym:data', JSON.stringify(formData));
    // console.log(formData);
  }, [formData]);
  const handleSubmitForm: SubmitHandler<schedulingData> = async (data) => {
    const {
      clientName, selectedHour, localAgendamento, date,
    } = data;
    setRawData({
      clientName,
      selectedHour,
      date,
      localAgendamento,
    });
    const ParsedDate = moment(data.date).format('DD/MM/YYYY');
    setFormData({
      clientName,
      selectedHour,
      ParsedDate,
      localAgendamento,
    });
  };

  return (
    <>
      <Header />

      <Form ref={formRef} onSubmit={handleSubmitForm}>

        <Container>
          <h1>Agendar Horario</h1>
          <div> </div>
          <SelectFranchise>
            <SelectComponent name="localAgendamento" />
          </SelectFranchise>
          <SelectDate>
            {/* <Input type="date" InputSize="140" /> */}
            <DatePick name="date" />
          </SelectDate>

          {/* IF DATA & LOCAL SELECIONADO => MOSTRAR OS HORARIOS E O RESTO(?) TO DO */}
          <Hours name="selectedHour" />

          {/* <Input type="text" InputSize="90" /> */}
          <Input name="clientName" type="text" title="Nome e Sobrenome" />
          <ButtonAg type="submit" onClick={handleOpenModal}>
            <span>CONFIRMAR</span>
            <FiCalendar size={30} />
          </ButtonAg>
          <Modal
            open={open}
            onClose={handleCloseModal}
            aria-labelledby="confirm-apointment"
            aria-describedby="confirm-apointment-description"
          >
            {body}
          </Modal>
        </Container>
      </Form>

    </>
  );
};
export default Dashboard;
