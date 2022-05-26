import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

import { Produto } from 'src/almoxarifado/produto/entity/produto.entity';

@Entity()
export class EntradaProduto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Produto)
  @JoinColumn()
  id_produto: string;

  @Column()
  id_entrada: string;

  @Column()
  quantidade: number;
}