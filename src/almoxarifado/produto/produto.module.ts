import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Produto } from './entity/produto.entity';
import { Entrada } from '../entrada/entity/entrada.entity';
import { EntradaProduto } from '../entrada/entity/entrada.produto.entity';
import { Estoque } from '../entrada/entity/estoque.entity';

import { ProdutoController } from './controller/produto.controller';
import { ProdutoRepository } from './repository/produto.repository';
import { ProdutoService } from './service/produto.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Produto, Entrada, EntradaProduto, Estoque])
  ],
  controllers: [ProdutoController],
  providers: [ProdutoRepository, ProdutoService]
})
export class ProdutoModule {}
