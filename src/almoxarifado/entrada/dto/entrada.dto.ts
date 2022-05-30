import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class EntradaDto {
  @Expose()
  id: string;

  @Expose()
  numeroEntrada: number;

  dataEntrada: Date;
}
