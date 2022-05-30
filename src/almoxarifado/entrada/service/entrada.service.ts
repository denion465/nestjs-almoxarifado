import { Inject, Injectable } from '@nestjs/common';

import { EntradaRepository } from '../repository/entrada.repository';
import { EstoqueRepository } from '../../estoque/repository/estoque.repository';
import { EntradaProdutosReqDto } from '../dto/entrada.produtos.req.dto';
import { EntradaProdutoDto } from '../dto/entrada.produto.dto';
import { IEntradaProdutosResDto } from '../dto/entrada.produtos.res.dto';

@Injectable()
export class EntradaService {
  constructor(
    @Inject(EntradaRepository)
    private readonly entradaRepository: EntradaRepository,
    @Inject(EstoqueRepository)
    private readonly estoqueRepository: EstoqueRepository
  ) {}

  async createEntrada({
    produtos
  }: EntradaProdutosReqDto): Promise<IEntradaProdutosResDto> {
    const entrada = await this.entradaRepository.createEntrada();

    let IdEntradaProduto = '';
    for (const { produto, quantidade } of produtos) {
      const entradaProduto = await this.entradaRepository.createEntradaProduto({
        produto,
        entrada,
        quantidade
      });

      IdEntradaProduto = entradaProduto.id;

      await this.generateEstoque(entradaProduto);
    }

    return {
      id: IdEntradaProduto,
      numeroEntrada: entrada.numeroEntrada,
      produtos
    };
  }

  async generateEstoque({
    produto,
    quantidade
  }: EntradaProdutoDto): Promise<void> {
    await this.estoqueRepository.createEntradaEstoque({
      produto,
      quantidade
    });
  }
}
