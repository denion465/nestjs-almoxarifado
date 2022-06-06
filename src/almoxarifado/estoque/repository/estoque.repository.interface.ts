import { EstoqueProdutoDto } from '../dto/estoque.produto.dto';
import { EstoqueDto } from '../dto/estoque.dto';
import { ProdutoDto } from 'src/almoxarifado/produto/dto/produto.dto';

export interface IEstoqueRepository {
  updateEntradaEstoque(entradaEstoque: EstoqueProdutoDto): Promise<void>;
  findEstoqueByProduto(produto: ProdutoDto): Promise<EstoqueDto>;
}
