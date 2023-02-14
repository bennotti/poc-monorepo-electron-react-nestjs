import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Tarefa } from 'src/database/entities/tarefa.entity';
import { TarefaRepository } from 'src/database/repositories/tarefa.repository';
import { TarefaSchema } from 'src/database/schemas/tarefa.schema';
import { TarefaController } from './tarefa.controller';
import { TarefaService } from './tarefa.service';

@Module({
    imports: [
      MongooseModule.forFeature([{ name : Tarefa.name, schema : TarefaSchema}])
    ],
    providers: [
      TarefaService,
      TarefaRepository
    ],
    controllers: [TarefaController],
})
export class TarefaModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    // consumer.apply(ValidateMiddleware).forRoutes(TarefaController);
  }
}
