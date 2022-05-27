import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class EntradaDto {
  @Expose()
  id: string;

  numeroEntrada: number;

  dataCadastro: Date;
}
