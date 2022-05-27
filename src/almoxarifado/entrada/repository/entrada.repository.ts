import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';

import { Entrada } from '../entity/entrada.entity';
import { EntradaProduto } from '../entity/entrada.produto.entity';
import { IEntradaRepository } from './entrada.repository.interface';
import { EntradaDto } from '../dto/entrada.dto';
import { EntradaProdutoDto } from '../dto/entrada.produto.dto';
import { EntradaProdutoRes } from '../dto/entrada.produto.res';

@Injectable()
export class EntradaRepository implements IEntradaRepository {
  constructor(
    @InjectRepository(Entrada)
    private readonly entradaRepository: Repository<Entrada>,
    @InjectRepository(EntradaProduto)
    private readonly entradaProdutoRepository: Repository<EntradaProduto>
  ) {}

  async createEntrada(): Promise<EntradaDto> {
    const entrada = this.entradaRepository.create();

    const entradaRes = await this.entradaRepository.save(entrada);

    return plainToInstance(EntradaDto, entradaRes);
  }

  async createEntradaProduto({
    produto,
    entrada,
    quantidade
  }: EntradaProdutoDto): Promise<EntradaProdutoRes> {
    const entradaProduto = this.entradaProdutoRepository.create({
      produto,
      entrada,
      quantidade
    });

    const entradaProdutoRes = await this.entradaProdutoRepository.save(
      entradaProduto
    );

    return plainToInstance(EntradaProdutoRes, entradaProdutoRes);
  }
}
