import { Test, TestingModule } from '@nestjs/testing';

import { ProdutoRepository } from '../repository/produto.repository';
import { ProdutoService } from './produto.service';

describe('ProdutoService', () => {
  let service: ProdutoService;
  let repository: ProdutoRepository;

  const mockProductRepository = () => ({
    findAll: jest.fn(),
    create: jest.fn()
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProdutoService,
        {
          provide: ProdutoRepository,
          useFactory: mockProductRepository
        }
      ]
    }).compile();

    service = module.get<ProdutoService>(ProdutoService);
    repository = module.get<ProdutoRepository>(ProdutoRepository);
  });

  it('should be list all products', async () => {
    const createdProduct = {
      id: 'abe5d5a1-d9ae-4909-aaa7-7bd0f112ece4',
      descricao: 'description test',
      observacao: 'observation test',
      data_atualizacao: new Date(),
      data_cadastro: new Date()
    };

    jest
      .spyOn(repository, 'findAll')
      .mockImplementation(async () => [createdProduct]);

    const result = await service.findAll();

    expect(result).toEqual([createdProduct]);
  });

  it('should be create a new product', async () => {
    const productToBeCreated = {
      descricao: 'description test',
      observacao: 'observation test'
    };

    const createdProduct = {
      id: 'abe5d5a1-d9ae-4909-aaa7-7bd0f112ece4',
      descricao: 'description test',
      observacao: 'observation test',
      data_atualizacao: new Date(),
      data_cadastro: new Date()
    };

    jest
      .spyOn(repository, 'create')
      .mockReturnValue(Promise.resolve(createdProduct));

    expect(await service.create(productToBeCreated)).toBe(createdProduct);
  });
});
