import { ApiProperty } from '@nestjs/swagger';
import { ResponseApiDto } from './response-api.dto';

// interface resposta padrão + paginação
export interface IPagingResponseApiDto<T> {
  countRecords: number;
  totalCountRecords: number;
  page: number;
  totalPages: number;
  perPage: number;
  records: T[];
}

export class PagingResponseApiDto<T> extends ResponseApiDto implements IPagingResponseApiDto<T> {
  @ApiProperty()
  countRecords: number;
  @ApiProperty()
  totalCountRecords: number;
  @ApiProperty()
  page: number;
  @ApiProperty()
  totalPages: number;
  @ApiProperty()
  perPage: number;
  @ApiProperty()
  records: T[];
  constructor(
    countRecords: number,
    totalCountRecords: number,
    totalPages: number,
    records: T[],
    result = true,
    message = 'Executado com sucesso!',
    page = 1,
    perPage = 10,
  ) {
    super(result, message);
    this.records = records;
    this.countRecords = countRecords;
    this.totalCountRecords = totalCountRecords;
    this.page = page;
    this.totalPages = totalPages;
    this.perPage = perPage;
  }
}
