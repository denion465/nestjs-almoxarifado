import { Inject, Injectable } from '@nestjs/common';

import { EntradaRepository } from '../repository/entrada.repository';
import { EntradaProdutosReqDto } from '../dto/entrada.produtos.req.dto';
import { IEntradaProdutosResDto } from '../dto/entrada.produtos.res.dto';
import { EstoqueService } from 'src/almoxarifado/estoque/service/estoque.service';

@Injectable()
export class EntradaService {
  constructor(
    @Inject(EntradaRepository)
    private readonly entradaRepository: EntradaRepository,
    @Inject(EstoqueService)
    private readonly estoqueService: EstoqueService
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

      await this.estoqueService.updateEstoque(entradaProduto);
    }

    return {
      id: IdEntradaProduto,
      numeroEntrada: entrada.numeroEntrada,
      produtos
    };
  }
}
