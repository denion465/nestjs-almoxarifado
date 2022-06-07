import { Inject, Injectable } from '@nestjs/common';

import { EstoqueRepository } from '../repository/estoque.repository';
import { EntradaProdutoDto } from 'src/almoxarifado/entrada/dto/entrada.produto.dto';
import { ProdutoDto } from 'src/almoxarifado/produto/dto/produto.dto';

@Injectable()
export class EstoqueService {
  constructor(
    @Inject(EstoqueRepository)
    private readonly estoqueRepository: EstoqueRepository
  ) {}

  async updateEstoque({
    produto,
    quantidade
  }: EntradaProdutoDto): Promise<void> {
    const estoque = await this.estoqueRepository.findEstoqueByProduto(
      produto as ProdutoDto
    );

    if (estoque) {
      const quantidadeTotal = (estoque.quantidadeTotal += quantidade);

      return this.estoqueRepository.updateEntradaEstoque({
        id: estoque.id,
        produto: {
          id: estoque.produtoId
        },
        quantidadeTotal
      });
    }

    await this.estoqueRepository.updateEntradaEstoque({
      produto,
      quantidadeTotal: quantidade
    });
  }
}
