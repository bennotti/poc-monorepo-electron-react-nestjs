import { ApiProperty } from '@nestjs/swagger';

// interface resposta padrão
export interface IResponseApiDto {
  result: boolean;
  message: string;
}
export class ResponseApiDto implements IResponseApiDto {
  @ApiProperty({ description: 'Result of response', example: true })
  result: boolean;
  @ApiProperty({ description: 'Message of result', example: 'Executado com sucesso!' })
  message: string;
  constructor(result = true, message = 'Executado com sucesso!') {
    this.result = result;
    this.message = message;
  }
}
