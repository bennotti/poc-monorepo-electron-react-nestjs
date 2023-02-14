import { Tarefa } from "../../../../database/entities/tarefa.entity";

export class TarefaRepositoryMock {
  private dataList: Tarefa[] = [
    {
      descricao: 'tarefa 1',
      concluido: false,
    }
  ];

  async save(newDto: { descricao: string, concluido: boolean }): Promise<Tarefa> {
    this.dataList.push(newDto);
    return this.dataList.find(p => p.descricao === newDto.descricao);
}
async getAll(): Promise<Tarefa[]> {
    return this.dataList;
}
async getByID(id: string): Promise<Tarefa> {
  return this.dataList[0];
}
async deleteByID(id: string): Promise<Tarefa> {
  return this.dataList[0];;
}
async updateByID<TDto>(id: string, newDto: TDto): Promise<Tarefa> {
  return this.dataList[0];;
}
}
