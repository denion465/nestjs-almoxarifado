import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class EstoqueProdutoDto {
  @IsString()
  @IsNotEmpty()
  produto: {
    id: string;
  };

  @IsNumber()
  @IsNotEmpty()
  quantidade: number;
}
