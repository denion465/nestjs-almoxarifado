import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ProdutoDto {
  @Expose()
  id: string;

  @Expose()
  descricao: string;

  @Expose()
  observacao: string;

  @Expose()
  data_cadastro: Date;

  data_atualizacao: Date;
}
