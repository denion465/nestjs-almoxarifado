import { Body, Controller, Post } from '@nestjs/common';
import { EntradaService } from '../service/entrada.service';

import { EntradaProdutosReqDto } from '../dto/entrada.produtos.req.dto';
import { IEntradaProdutosResDto } from '../dto/entrada.produtos.res.dto';

@Controller('/entrada')
export class EntradaController {
  constructor(private readonly entradaService: EntradaService) {}

  @Post('/save')
  async save(
    @Body() entrada: EntradaProdutosReqDto
  ): Promise<IEntradaProdutosResDto> {
    return this.entradaService.createEntrada(entrada);
  }
}
