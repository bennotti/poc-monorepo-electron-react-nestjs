import { Injectable } from '@nestjs/common';
import { ResponseApiDto } from './api/dtos/response-api.dto';

@Injectable()
export class AppService {
  async getRunning(): Promise<ResponseApiDto> {
    return new ResponseApiDto(true, 'API is Running!!');
  }
}
