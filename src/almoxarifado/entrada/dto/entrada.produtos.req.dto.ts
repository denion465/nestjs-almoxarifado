import { IsArray, ArrayNotEmpty } from 'class-validator';

export class EntradaProdutosReqDto {
  @IsArray()
  @ArrayNotEmpty()
  produtos: Array<{
    produto: {
      id: string;
    };
    quantidade: number;
  }>;
}
