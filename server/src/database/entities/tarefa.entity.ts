import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class Tarefa {
  @Prop({ required: true })
  descricao: string;

  @Prop({ required: true })
  concluido: boolean;
}
