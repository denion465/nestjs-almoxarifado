import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AlmoxarifadoModule } from './almoxarifado/almoxarifado.module';

@Module({
  imports: [TypeOrmModule.forRoot(), AlmoxarifadoModule]
})
export class AppModule {}
