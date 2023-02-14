import { Module } from '@nestjs/common';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { TarefaModule } from './modules/tarefa/tarefa.module';

@Module({
  controllers: [],
  providers: [
    {
      provide: "APP_INTERCEPTOR",
      useClass: LoggingInterceptor,
    },
  ],
  imports: [
    TarefaModule,
  ],
})
export class ApiModule {}
