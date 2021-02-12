// import { v4 as uuid } from 'uuid';
import {Column, Entity, PrimaryGeneratedColumn,CreateDateColumn} from 'typeorm';

// clientName : string;
//     selectedHour : string;
//     date: Date;
//     localAgendamento: string;
//    created at

@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  clientName: string;

  @Column('timestamp with time zone')
  date: Date;

  @Column()
  selectedHour: string;

  @Column()
  localAgendamento: string;

  @CreateDateColumn()
  created_at: Date;
}

export default Appointment;
