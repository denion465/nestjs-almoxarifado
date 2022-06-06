import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class EstoqueProdutoDto {
  @IsString()
  @IsNotEmpty()
  id?: string;

  @IsString()
  @IsNotEmpty()
  produto: {
    id: string;
  };

  @IsNumber()
  @IsNotEmpty()
  quantidadeTotal: number;
}
