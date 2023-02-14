import PublicRoutes from '@infra/routes/public.routes';
import { IReactRouterDinamico } from '@infra/types';
import { TarefaScreen } from './telas/tarefa.screen';

const tarefaRouteModule: Array<IReactRouterDinamico> = [
    {
        path: '/tarefa',
        element: <PublicRoutes />,
        childrens: [
          {
            path: '',
            element: <TarefaScreen />,
          },
        ],
    },
];

export { tarefaRouteModule };
