import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

import { Produto } from './produto.entity';

@Entity()
export class Estoque {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Produto)
  @JoinColumn()
  id_produto: string;

  @Column()
  quantidade_total: number;
}
