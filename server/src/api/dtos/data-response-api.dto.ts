import { ApiProperty } from '@nestjs/swagger';
import { ResponseApiDto } from './response-api.dto';

// interface resposta padrão + retorno de dados
export interface IDataResponseApiDto<T> {
  data: T | undefined | T[];
}

export class DataResponseApiDto<T> extends ResponseApiDto implements IDataResponseApiDto<T> {
  @ApiProperty({ description: 'Data of result' })
  data: T | undefined | T[];

  constructor(data: T | undefined | T[], result = true, message = 'Executado com sucesso!') {
    super(result, message);
    this.data = data;
  }
}
