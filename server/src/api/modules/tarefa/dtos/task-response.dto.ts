import { ApiProperty } from '@nestjs/swagger';

export class TarefaResponseDto {
  @ApiProperty({ description: 'Descricao da tarefa' })
  descricao: string;
  @ApiProperty({ description: 'Tarefa concluida' })
  concluido: boolean;

  constructor(descricao: string, concluido: boolean) {
    this.descricao = descricao;
    this.concluido = concluido;
  }
}
