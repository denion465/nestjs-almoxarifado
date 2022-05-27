import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Estoque } from '../entity/estoque.entity';
import { IEstoqueRepository } from './estoque.repository.interface';
import { EstoqueProdutoDto } from '../dto/estoque.produto.dto';

@Injectable()
export class EstoqueRepository implements IEstoqueRepository {
  constructor(
    @InjectRepository(Estoque)
    private readonly estoqueRepository: Repository<Estoque>
  ) {}

  async createEntradaEstoque({
    produto,
    quantidade
  }: EstoqueProdutoDto): Promise<void> {
    const estoque = await this.estoqueRepository.findOne({
      where: { produto }
    });

    if (estoque) {
      const quantidadeTotal = (estoque.quantidadeTotal += quantidade);

      const updatedEstoque = this.estoqueRepository.create({
        ...estoque,
        quantidadeTotal
      });

      await this.estoqueRepository.save(updatedEstoque);
      return;
    }

    const newEstoque = this.estoqueRepository.create({
      produto,
      quantidadeTotal: quantidade
    });

    await this.estoqueRepository.save(newEstoque);
  }
}
