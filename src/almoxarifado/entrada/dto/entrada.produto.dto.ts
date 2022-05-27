import { Exclude, Expose } from 'class-transformer';
import { IsNumber, IsNotEmpty, IsObject } from 'class-validator';

@Exclude()
export class EntradaProdutoDto {
  @IsObject()
  @IsNotEmpty()
  @Expose()
  produto: {
    id: string;
  };

  @IsObject()
  @IsNotEmpty()
  entrada: {
    id: string;
  };

  @IsNumber()
  @IsNotEmpty()
  @Expose()
  quantidade: number;
}
