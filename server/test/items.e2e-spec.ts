import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { TarefaModule } from '../src/api/modules/tarefa/tarefa.module';

describe('TasksController (e2e)', () => {
  let app;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        TarefaModule,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  const task = {
    title: 'Great task',
    finished: false,
    description: 'Description of this great task',
  };

  let id: string = '';

  const updatedTask = {
    title: 'Great updated task',
    finished: false,
    description: 'Updated description of this great task',
  };

  const createTaskObject = JSON.stringify(task).replace(
    /\"([^(\")"]+)\":/g,
    '$1:',
  );

  it('createTask', () => {
    return request(app.getHttpServer())
      .post('/api/task')
      .send({
      })
      .expect(({ body }) => {
        const data = body.data.createTask;
        id = data.id;
        expect(data.title).toBe(task.title);
        expect(data.description).toBe(task.description);
        expect(data.finished).toBe(task.finished);
      })
      .expect(200);
  });

  it('getTasks', () => {
    return request(app.getHttpServer())
      .post('/api/task')
      .send({
      })
      .expect(({ body }) => {
        const data = body.data.tasks;
        const taskResult = data[0];
        expect(data.length).toBeGreaterThan(0);
        expect(taskResult.title).toBe(task.title);
        expect(taskResult.description).toBe(task.description);
        expect(taskResult.finished).toBe(task.finished);
      })
      .expect(200);
  });

  const updateTaskObject = JSON.stringify(updatedTask).replace(
    /\"([^(\")"]+)\":/g,
    '$1:',
  );

  it('updateTask', () => {

    return request(app.getHttpServer())
      .post('/api/task')
      .send({
      })
      .expect(({ body }) => {
        const data = body.data.updatedTask;
        expect(data.title).toBe(updatedTask.title);
        expect(data.description).toBe(updatedTask.description);
        expect(data.finished).toBe(updatedTask.finished);
      })
      .expect(200);
  });

  it('deleteTask', () => {

    return request(app.getHttpServer())
      .post('/api/task')
      .send({
      })
      .expect(({ body }) => {
        const data = body.data.deleteTask;
        expect(data.title).toBe(updatedTask.title);
        expect(data.description).toBe(updatedTask.description);
        expect(data.finished).toBe(updatedTask.finished);
      })
      .expect(200);
  });
});
