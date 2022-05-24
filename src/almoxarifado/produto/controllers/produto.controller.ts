import { Controller } from '@nestjs/common';

import { ProdutoService } from '../services/produto.service';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}
}
