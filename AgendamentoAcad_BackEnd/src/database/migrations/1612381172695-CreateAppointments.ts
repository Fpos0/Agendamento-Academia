import {MigrationInterface, QueryRunner, Table} from "typeorm";

// clientName : string;
//     selectedHour : string;
//     date: Date;
//     localAgendamento: string;
//    created at
export class CreateAppointments1612381172695 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
      await queryRunner.createTable(
        new Table({
          name: 'appointments',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
            },
            {
              name: 'clientName',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'selectedHour',
              type: 'varchar',
              isNullable: false,

            },
            {
              name: 'date',
              type: 'timestamp with time zone',
              isNullable: false,

            },
            {
              name: 'localAgendamento',
              type: 'varchar',
              isNullable: false,

            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
            },
          ],
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropTable('appointments');
    }

}
