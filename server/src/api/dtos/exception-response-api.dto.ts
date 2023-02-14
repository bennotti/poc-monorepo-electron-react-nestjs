import { ApiProperty } from '@nestjs/swagger';
import { IResponseApiDto } from './response-api.dto';

export class ExceptionResponseApiDto implements IResponseApiDto {
  @ApiProperty({ description: 'Result of response', example: false })
  readonly result: boolean;
  @ApiProperty({ description: 'Message of result', example: 'BadRequest' })
  message: string;
  constructor(message = 'BadRequest') {
    this.result = false;
    this.message = message;
  }
}
