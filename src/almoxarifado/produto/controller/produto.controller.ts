import { Body, Controller, Get, Post } from '@nestjs/common';

import { ProdutoService } from '../service/produto.service';
import { ProdutoDto } from '../dto/produto.dto';
import { CreateProdutoDto } from '../dto/create.produto.dto';

@Controller('/produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Get('/findAll')
  async findAll(): Promise<ProdutoDto[]> {
    return this.produtoService.findAll();
  }

  @Post('/save')
  async save(@Body() produto: CreateProdutoDto): Promise<ProdutoDto> {
    return this.produtoService.create(produto);
  }
}
