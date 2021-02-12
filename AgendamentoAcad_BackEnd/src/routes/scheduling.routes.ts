import { Router } from 'express';
import { getRepository } from 'typeorm';
import Appointment from '../models/Appointment';
import CreateAppointmentService from '../services/CreateAppoinmentService';
const schedulingRouter = Router();

schedulingRouter.get('/', async (request, response) => {
  console.log('GET CALL');

  const AppointmentRepository = getRepository(Appointment)
  const appointments = await AppointmentRepository.find();
  return response.json(appointments);
});

schedulingRouter.post('/', async (request, response) => {
  console.log('POST CALL');
  const {clientName,selectedHour,date,localAgendamento} = request.body;

  const CreateAppointment = new CreateAppointmentService();

  const appointment = await CreateAppointment.execute({
    clientName,selectedHour,date,localAgendamento
  });
  return response.json(appointment)
});

schedulingRouter.delete('/', async (request, response) => {
  // TO DO
  console.log('delete CALL ');
});

export default schedulingRouter;
