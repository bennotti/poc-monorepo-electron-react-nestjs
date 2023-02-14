import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Tarefa } from "../entities/tarefa.entity";
import { BaseRepository } from "./base.repository";


@Injectable()
export class TarefaRepository extends BaseRepository<Tarefa>{

    constructor(
        @InjectModel(Tarefa.name) model: Model<Tarefa>
    ) {
      super(model);
    }
}
