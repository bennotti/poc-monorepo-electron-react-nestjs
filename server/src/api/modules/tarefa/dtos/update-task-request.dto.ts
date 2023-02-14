import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDefined, IsString } from 'class-validator';

export class AtualizarTarefaRequestDto {
  @IsDefined()
  @IsString()
  @ApiProperty({ description: 'Descrição da tarefa', example: '' })
  descricao: string;
  @IsDefined()
  @IsBoolean()
  @ApiProperty({ description: 'Tarefa concluida', example: false })
  concluido: boolean;
}
