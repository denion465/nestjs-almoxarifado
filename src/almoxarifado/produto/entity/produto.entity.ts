import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { MaxLength } from 'class-validator';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @MaxLength(100)
  @Column()
  descricao: string;

  @MaxLength(100)
  @Column()
  observacao: string;

  @CreateDateColumn({ name: 'data_cadastro' })
  dataCadastro: Date;

  @UpdateDateColumn({ name: 'data_atualizacao' })
  dataAtualizacao: Date;
}
