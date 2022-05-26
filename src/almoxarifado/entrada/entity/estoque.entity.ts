import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

import { Produto } from 'src/almoxarifado/produto/entity/produto.entity';

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
