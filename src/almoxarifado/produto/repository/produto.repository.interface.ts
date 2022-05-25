import { ProdutoDto } from '../dto/produto.dto';
import { CreateProdutoDto } from '../dto/create.produto.dto';

export interface IProdutoRepository {
  create(produto: CreateProdutoDto): Promise<ProdutoDto>;
  findAll(): Promise<ProdutoDto[]>;
}
