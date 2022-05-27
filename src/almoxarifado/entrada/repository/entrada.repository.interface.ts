import { EntradaDto } from '../dto/entrada.dto';
import { EntradaProdutoDto } from '../dto/entrada.produto.dto';

export interface IEntradaRepository {
  createEntrada(): Promise<EntradaDto>;

  createEntradaProduto(
    entradaProduto: EntradaProdutoDto
  ): Promise<EntradaProdutoDto>;
}
