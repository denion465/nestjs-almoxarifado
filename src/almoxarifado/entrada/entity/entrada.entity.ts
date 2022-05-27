import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity()
export class Entrada {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'numero_entrada' })
  @Generated('increment')
  numeroEntrada: number;

  @CreateDateColumn({ name: 'data_entrada' })
  dataEntrada: Date;
}
