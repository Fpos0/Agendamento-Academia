import {getRepository} from 'typeorm';
import AppError from '../errors/AppError';
import Appointment from '../models/Appointment';
// clientName : string;
//     selectedHour : string;
//     date: Date;
//     localAgendamento: string;
//    created at

interface Request {
  clientName : string;
  selectedHour : string;
  date: Date;
  localAgendamento: string;
}

class CreateAppointmentService {
  public async execute({ clientName,selectedHour,date,localAgendamento}: Request): Promise<Appointment> {
    const AppointmentRepository = getRepository(Appointment);

    const appoinment = AppointmentRepository.create ( {
      clientName,
      selectedHour,
      date,
      localAgendamento,
    });

    await AppointmentRepository.save(appoinment);

    return appoinment;
  }
}

export default CreateAppointmentService;
