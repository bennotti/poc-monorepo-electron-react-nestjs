import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TarefaRepository } from '../../../database/repositories/tarefa.repository';
import { DataResponseApiDto } from '../../../api/dtos/data-response-api.dto';
import { CriarTarefaRequestDto } from './dtos/create-task-request.dto';
import { TarefaResponseDto } from './dtos/task-response.dto';
import { AtualizarTarefaRequestDto } from './dtos/update-task-request.dto';

@Injectable()
export class TarefaService {
  constructor(private readonly tarefaRepository: TarefaRepository) {}

  async create(bodyRequest: CriarTarefaRequestDto): Promise<DataResponseApiDto<TarefaResponseDto>> {
    var response = await this.tarefaRepository.save(bodyRequest);
    if (response) {
      return new DataResponseApiDto<TarefaResponseDto>(
        new TarefaResponseDto(
          response.descricao,
          response.concluido
        )
      );
    }
    return new DataResponseApiDto<TarefaResponseDto>(null, false, "Não foi possivel salvar a tarefa.");
  }

  async findOne(id: string): Promise<DataResponseApiDto<TarefaResponseDto>> {
    const response = await this.tarefaRepository.getByID(id);
    if (response) {
      return new DataResponseApiDto<TarefaResponseDto>(
        new TarefaResponseDto(
          response.descricao,
          response.concluido
        )
      );
    }
    return new DataResponseApiDto<TarefaResponseDto>(null, false, "Não foi possivel salvar a tarefa.");
  }

  async findAll(): Promise<DataResponseApiDto<TarefaResponseDto[]>> {
    const response = (await this.tarefaRepository.getAll()).map(p =>
      new TarefaResponseDto(
        p.descricao,
        p.concluido
      )
    );

    return new DataResponseApiDto<TarefaResponseDto[]>(response);
  }

  async update(id: string, bodyRequest: AtualizarTarefaRequestDto): Promise<DataResponseApiDto<TarefaResponseDto>> {
    var response = await this.tarefaRepository.updateByID(id, bodyRequest);
    if (response) {
      return new DataResponseApiDto<TarefaResponseDto>(
        new TarefaResponseDto(
          response.descricao,
          response.concluido
        )
      );
    }
    return new DataResponseApiDto<TarefaResponseDto>(null, false, "Não foi possivel salvar a tarefa.");
  }
}
