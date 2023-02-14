import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ResponseApiDto } from './api/dtos/response-api.dto';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Simple get endpoint' })
  @ApiResponse({ status: 200, type: ResponseApiDto })
  @ApiResponse({ status: 400, type: ResponseApiDto })
  async getRunning(): Promise<ResponseApiDto> {
    return this.appService.getRunning();
  }
}
