import { EstoqueProdutoDto } from '../dto/estoque.produto.dto';

export interface IEstoqueRepository {
  createEntradaEstoque(entradaEstoque: EstoqueProdutoDto): Promise<void>;
}
