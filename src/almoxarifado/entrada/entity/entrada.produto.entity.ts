import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

import { Produto } from '../../produto/entity/produto.entity';
import { Entrada } from './entrada.entity';

@Entity()
export class EntradaProduto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  produto_id: string;

  @Column()
  entrada_id: string;

  @ManyToOne(() => Produto)
  @JoinColumn({ name: 'produto_id' })
  produto: Produto;

  @ManyToOne(() => Entrada)
  @JoinColumn({ name: 'entrada_id' })
  entrada: Entrada;

  @Column()
  quantidade: number;
}
