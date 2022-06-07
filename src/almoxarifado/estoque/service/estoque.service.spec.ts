import { Test, TestingModule } from '@nestjs/testing';

import { EstoqueService } from './estoque.service';
import { EstoqueRepository } from '../repository/estoque.repository';

describe('EstoqueService', () => {
  let estoqueService: EstoqueService;
  let estoqueRepository: EstoqueRepository;

  const mockEstoqueRepository = () => ({
    updateEntradaEstoque: jest.fn(),
    findEstoqueByProduto: jest.fn()
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EstoqueService,
        {
          provide: EstoqueRepository,
          useFactory: mockEstoqueRepository
        }
      ]
    }).compile();

    estoqueService = module.get<EstoqueService>(EstoqueService);
    estoqueRepository = module.get<EstoqueRepository>(EstoqueRepository);
  });

  it('should be able to create a new estoque', async () => {
    const estoqueToBeCreated = {
      produto: {
        id: '039e697e-cc1b-43e4-900c-b42b75a7f2a1'
      },
      entrada: {
        id: 'b5ee8b89-2f29-45e8-8ce2-9a024160742b'
      },
      quantidade: 50
    };

    jest.spyOn(estoqueRepository, 'updateEntradaEstoque');

    const estoqueGenerated = jest.spyOn(estoqueService, 'updateEstoque');

    estoqueService.updateEstoque(estoqueToBeCreated);

    expect(estoqueGenerated).toBeCalledWith(estoqueToBeCreated);
    expect(estoqueGenerated).toHaveBeenCalledTimes(1);
  });

  it('should be able to update estoque if exists', async () => {
    const estoqueCreated = {
      id: '680b3617-2153-4bf1-ba66-dfbd15bca26a',
      produtoId: 'bbf7806e-f43d-4946-91c1-244edd1d14a8',
      quantidadeTotal: 50
    };

    const estoqueToBeUpdated = {
      produto: {
        id: 'bbf7806e-f43d-4946-91c1-244edd1d14a8'
      },
      entrada: {
        id: 'b5ee8b89-2f29-45e8-8ce2-9a024160742b'
      },
      quantidade: 50
    };

    jest
      .spyOn(estoqueRepository, 'findEstoqueByProduto')
      .mockReturnValue(Promise.resolve(estoqueCreated));

    const estoqueUpdated = jest.spyOn(estoqueService, 'updateEstoque');

    estoqueService.updateEstoque(estoqueToBeUpdated);

    expect(estoqueUpdated).toBeCalledWith(estoqueToBeUpdated);
    expect(estoqueUpdated).toHaveBeenCalledTimes(1);
  });
});
