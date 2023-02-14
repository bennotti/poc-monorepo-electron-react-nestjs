import { Schema } from "mongoose";


export const TarefaSchema = new Schema({
    descricao: String,
    concluido: Boolean
});
