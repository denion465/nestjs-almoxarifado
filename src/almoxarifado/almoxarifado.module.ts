import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Produto } from './produto/entity/produto.entity';
import { Entrada } from './entrada/entity/entrada.entity';
import { EntradaProduto } from './entrada/entity/entrada.produto.entity';
import { Estoque } from './estoque/entity/estoque.entity';

import { ProdutoController } from './produto/controller/produto.controller';
import { ProdutoService } from './produto/service/produto.service';
import { ProdutoRepository } from './produto/repository/produto.repository';

import { EntradaController } from './entrada/controller/entrada.controller';
import { EntradaRepository } from './entrada/repository/entrada.repository';
import { EntradaService } from './entrada/service/entrada.service';

import { EstoqueRepository } from './estoque/repository/estoque.repository';
import { EstoqueService } from './estoque/service/estoque.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Produto, Entrada, EntradaProduto, Estoque])
  ],
  controllers: [ProdutoController, EntradaController],
  providers: [
    ProdutoRepository,
    ProdutoService,
    EntradaRepository,
    EntradaService,
    EstoqueRepository,
    EstoqueService
  ]
})
export class AlmoxarifadoModule {}
