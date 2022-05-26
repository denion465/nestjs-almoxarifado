import { Inject, Injectable } from '@nestjs/common';
import { ProdutoRepository } from '../repository/produto.repository';
import { IProdutoRepository } from '../repository/produto.repository.interface';
import { ProdutoDto } from '../dto/produto.dto';
import { CreateProdutoDto } from '../dto/create.produto.dto';

@Injectable()
export class ProdutoService {
  constructor(
    @Inject(ProdutoRepository)
    private readonly produtoRepository: IProdutoRepository
  ) {}

  async findAll(): Promise<ProdutoDto[]> {
    return await this.produtoRepository.findAll();
  }

  async create({
    descricao,
    observacao
  }: CreateProdutoDto): Promise<ProdutoDto> {
    return await this.produtoRepository.create({
      descricao,
      observacao
    });
  }
}
