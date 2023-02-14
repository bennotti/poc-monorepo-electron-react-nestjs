/* eslint-disable @typescript-eslint/no-explicit-any */
import { Test, TestingModule } from '@nestjs/testing';
import { TarefaRepository } from '../../../../database/repositories/tarefa.repository';
import { TarefaService } from '../tarefa.service';
import { TarefaRepositoryMock } from '../__mocks__/tarefa.repository.mock';

describe('TarefaService', () => {
  let service: TarefaService;

  beforeEach(async () => {

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: TarefaRepository,
          useClass: TarefaRepositoryMock  // <-- Use the Model Class from Mongoose
        },
        TarefaService,
      ],
    }).compile();

    service = module.get<TarefaService>(TarefaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });


  it('Deve retornar dados mocados', async () => {
    const res = await service.findAll();
    expect(res.data.length).toBeGreaterThan(0);
  });
});
