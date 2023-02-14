import { IReactRouterDinamico } from '@infra/types';
import { Navigate } from 'react-router-dom';

import { tarefaRouteModule } from './tarefa/tarefa.route';

const rotasModulos: Array<IReactRouterDinamico> = [
  ...tarefaRouteModule,
  {
    path: '/',
    element: <Navigate to={'/tarefa'} />,
  },
];

export { rotasModulos };
