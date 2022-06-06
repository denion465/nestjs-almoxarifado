import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Estoque } from '../entity/estoque.entity';
import { IEstoqueRepository } from './estoque.repository.interface';
import { EstoqueProdutoDto } from '../dto/estoque.produto.dto';
import { EstoqueDto } from '../dto/estoque.dto';
import { plainToInstance } from 'class-transformer';
import { ProdutoDto } from 'src/almoxarifado/produto/dto/produto.dto';

@Injectable()
export class EstoqueRepository implements IEstoqueRepository {
  constructor(
    @InjectRepository(Estoque)
    private readonly estoqueRepository: Repository<Estoque>
  ) {}

  async findEstoqueByProduto(produto: ProdutoDto): Promise<EstoqueDto> {
    const estoque = this.estoqueRepository.findOne({
      where: {
        produto
      }
    });

    return plainToInstance(EstoqueDto, estoque);
  }

  async updateEntradaEstoque(entradaEstoque: EstoqueProdutoDto): Promise<void> {
    const newEntradaEstoque = this.estoqueRepository.create({
      ...entradaEstoque
    });

    await this.estoqueRepository.save(newEntradaEstoque);
  }
}
