/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Modal } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { ContainerButton } from './styles';

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
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Button: React.FC = ({ children, ...rest }) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Deseja Confirmar o agendamento ?</h2>
      <p id="simple-modal-description">
        09/02/2021 as 18:00 na unidade AQUARIUS
      </p>
    </div>
  );
  return (
    <>
      <ContainerButton type="submit" onClick={handleOpen} {...rest}>
        {children}
      </ContainerButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="confirm-apointment"
        aria-describedby="confirm-apointment-description"
      >
        {body}
      </Modal>
    </>
  );
};

export default Button;
