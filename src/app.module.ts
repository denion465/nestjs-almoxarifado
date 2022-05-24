import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProdutoModule } from './almoxarifado/produto/modules/produto.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ProdutoModule]
})
export class AppModule {}
