import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ExceptionResponseApiDto } from '../../../api/dtos/exception-response-api.dto';
import { ApiDataResponseApiResponse } from '../../../api/decorators/data-response-api.decorator';
import { ApiListDataResponseApiResponse } from '../../../api/decorators/list-data-response-api.decorator';
import { DataResponseApiDto } from '../../../api/dtos/data-response-api.dto';
import { CriarTarefaRequestDto } from './dtos/create-task-request.dto';
import { TarefaResponseDto } from './dtos/task-response.dto';
import { AtualizarTarefaRequestDto } from './dtos/update-task-request.dto';
import { TarefaService } from './tarefa.service';

@Controller('api/tarefa')
@ApiTags('Tarefas')
export class TarefaController {
  constructor(private readonly tarefaService: TarefaService) {}

  @Get()
  @ApiOperation({ summary: 'Lista todas as tarefas' })
  @ApiListDataResponseApiResponse(TarefaResponseDto)
  @ApiResponse({ status: 400, type: ExceptionResponseApiDto })
  async getAll(): Promise<DataResponseApiDto<TarefaResponseDto[]>> {
    return this.tarefaService.findAll();
  }

  @Get('/:tarefaId')
  @ApiOperation({ summary: 'Obter tarefa por id' })
  @ApiDataResponseApiResponse(TarefaResponseDto)
  @ApiResponse({ status: 400, type: ExceptionResponseApiDto })
  async getById(@Param('tarefaId') tarefaId: string): Promise<DataResponseApiDto<TarefaResponseDto>> {
    return this.tarefaService.findOne(tarefaId);
  }

  @Post()
  @ApiOperation({ summary: 'Criar tarefa' })
  @ApiDataResponseApiResponse(TarefaResponseDto)
  @ApiResponse({ status: 400, type: ExceptionResponseApiDto })
  @ApiBody({ type: CriarTarefaRequestDto })
  async createBadge(@Body() bodyRequest: CriarTarefaRequestDto): Promise<DataResponseApiDto<TarefaResponseDto>> {
    return this.tarefaService.create(bodyRequest);
  }

  @Put('/:tarefaId')
  @ApiOperation({ summary: 'Atualizar tarefa' })
  @ApiDataResponseApiResponse(TarefaResponseDto)
  @ApiResponse({ status: 400, type: ExceptionResponseApiDto })
  @ApiBody({ type: AtualizarTarefaRequestDto })
  async updateBadge(
    @Param('tarefaId') tarefaId: string,
    @Body() bodyRequest: AtualizarTarefaRequestDto,
  ): Promise<DataResponseApiDto<TarefaResponseDto>> {
    return this.tarefaService.update(tarefaId, bodyRequest);
  }
}
