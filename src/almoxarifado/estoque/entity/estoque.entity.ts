import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

import { Produto } from '../../produto/entity/produto.entity';

@Entity()
export class Estoque {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  produto_id: string;

  @OneToOne(() => Produto)
  @JoinColumn({ name: 'produto_id' })
  produto: Produto;

  @Column({ name: 'quantidade_total' })
  quantidadeTotal: number;
}
