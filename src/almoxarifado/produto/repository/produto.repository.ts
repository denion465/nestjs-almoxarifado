import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';

import { Produto } from '../entities/produto.entity';
import { IProdutoRepository } from './produto.repository.interface';
import { CreateProdutoDto } from '../dto/create.produto.dto';
import { ProdutoDto } from '../dto/produto.dto';

@Injectable()
export class ProdutoRepository implements IProdutoRepository {
  constructor(
    @InjectRepository(Produto)
    private readonly produtoRepository: Repository<Produto>
  ) {}

  async findAll(): Promise<ProdutoDto[]> {
    const produtos = await this.produtoRepository.find();

    return plainToInstance(ProdutoDto, produtos);
  }

  async create({
    descricao,
    observacao
  }: CreateProdutoDto): Promise<ProdutoDto> {
    const produto = this.produtoRepository.create({
      descricao,
      observacao
    });

    const produtoEntity = await this.produtoRepository.save(produto);

    return plainToInstance(ProdutoDto, produtoEntity);
  }
}
