import { Test, TestingModule } from '@nestjs/testing';

import { EntradaService } from './entrada.service';
import { EntradaRepository } from '../repository/entrada.repository';
import { EstoqueRepository } from '../../estoque/repository/estoque.repository';

describe('EntradaService', () => {
  let entradaService: EntradaService;
  let entradaRepository: EntradaRepository;

  const mockEntradaRepository = () => ({
    createEntrada: jest.fn(),
    createEntradaProduto: jest.fn(),
    createEntradaEstoque: jest.fn()
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EntradaService,
        {
          provide: EntradaRepository,
          useFactory: mockEntradaRepository
        },
        {
          provide: EstoqueRepository,
          useFactory: mockEntradaRepository
        }
      ]
    }).compile();

    entradaService = module.get<EntradaService>(EntradaService);
    entradaRepository = module.get<EntradaRepository>(EntradaRepository);
  });

  it('should be create a new entrada', async () => {
    const entradaToBeCreated = {
      id: 'abe5d5a1-d9ae-4909-aaa7-7bd0f112ece4',
      numeroEntrada: 1,
      dataEntrada: new Date()
    };

    const entradaProdutosToBeCreated = {
      produtos: [
        {
          produto: {
            id: '039e697e-cc1b-43e4-900c-b42b75a7f2a1'
          },
          quantidade: 50
        }
      ]
    };

    const entradaProdutosCreated = {
      id: 'b5ee8b89-2f29-45e8-8ce2-9a024160742b',
      numeroEntrada: 1,
      produto: {
        id: '039e697e-cc1b-43e4-900c-b42b75a7f2a1'
      },
      entrada: {
        id: 'abe5d5a1-d9ae-4909-aaa7-7bd0f112ece4'
      },
      quantidade: 50
    };

    jest
      .spyOn(entradaRepository, 'createEntrada')
      .mockImplementation(async () => entradaToBeCreated);

    const estoqueGenerated = jest.spyOn(entradaService, 'generateEstoque');

    jest
      .spyOn(entradaRepository, 'createEntradaProduto')
      .mockReturnValue(Promise.resolve(entradaProdutosCreated));

    const response = await entradaService.createEntrada(
      entradaProdutosToBeCreated
    );

    expect(estoqueGenerated).toHaveBeenCalledTimes(1);
    expect(response).toEqual({
      id: 'b5ee8b89-2f29-45e8-8ce2-9a024160742b',
      numeroEntrada: 1,
      produtos: [
        {
          produto: {
            id: '039e697e-cc1b-43e4-900c-b42b75a7f2a1'
          },
          quantidade: 50
        }
      ]
    });
  });
});
