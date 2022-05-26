import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Produto } from './entities/produto.entity';
import { Entrada } from './entities/entrada.entity';
import { EntradaProduto } from './entities/entrada.produto.entity';
import { Estoque } from './entities/estoque.entity';

import { ProdutoController } from './controllers/produto.controller';
import { ProdutoRepository } from './repository/produto.repository';
import { ProdutoService } from './services/produto.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Produto, Entrada, EntradaProduto, Estoque])
  ],
  controllers: [ProdutoController],
  providers: [ProdutoRepository, ProdutoService]
})
export class ProdutoModule {}
