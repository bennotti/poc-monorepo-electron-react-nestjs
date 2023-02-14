import '@app/assets/css/scrollbar.css';
import '@app/assets/css/app.css';

import { AppRoutes } from '@app/app-routes';
import { FullScreenLayout } from '@infra/layouts/full-screen.layout';
import { selectCurrentLayout } from '@infra/selectors/layout.selector';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { env } from '@infra/env';
// import { LoadingCentered } from '@infra/componentes/loading-centered';
import { AppDispatch } from '@infra/store';
import { useEffect, useState } from 'react';
import { useSetInterval } from '@infra/hooks/use-set-interval.hook';
// import { selectIsRestoringAuth } from '@modulos/seguranca/selectors/autenticacao.selector';
// import {
//   tryRefreshToken,
//   tryRestoreAuth,
//   tryRestoreSettings,
// } from '@modulos/seguranca/thunks/autenticacao.thunk';
import { AnyObject } from '@infra/types';
import { notification } from 'antd';
import { NotificacaoDto } from '@infra/dtos/notificacao.dto';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const openNotificationWithIcon = (args: NotificacaoDto, type?: NotificationType) => {
  if (!type) {
    notification.open({
      message: args.titulo ?? '',
      description: args.conteudo ?? ''
    });
    return;
  }
  notification[type]({
    message: args.titulo ?? '',
    description: args.conteudo ?? ''
  });
};

const App: React.FC = () => {
  // const [isLoading, setIsLoading] = useState<boolean>(true);
  // const isLoading = useSelector(selectIsRestoringAuth);
  const currentLayout = useSelector(selectCurrentLayout);
  const [inicializacaoVerificada, setInicializacaoVerificada] = useState<boolean>(false);

  const dispatch: AppDispatch = useDispatch();

  // useSetInterval(async () => {
  //   if (!inicializacaoVerificada) {
  //     window.internal.events.on('check-settings');
  //   }
  // }, 120000);

  // useEffect(() => {
  //   // dispatch(tryRestoreAuth());
  //   if (window.internal.events) {
  //     window.internal.events.receive('ready-to-show', (args: AnyObject) => {
  //       // dispatch(tryRestoreSettings(args));
  //       setInicializacaoVerificada(true);
  //     });
  //     window.internal.events.receive('notificacao', (args: NotificacaoDto) => {
  //       openNotificationWithIcon(args);
  //     });
  //     window.internal.events.receive('notificacao-sucesso', (args: NotificacaoDto) => {
  //       openNotificationWithIcon(args, 'success');
  //     });
  //     window.internal.events.receive('notificacao-error', (args: NotificacaoDto) => {
  //       openNotificationWithIcon(args, 'error');
  //     });
  //   }
  // }, []);

  const renderBrowserContent = () => {
    if (currentLayout === 'application') {
      return (
        <FullScreenLayout>
          <AppRoutes />
        </FullScreenLayout>
      );
    }
    return <AppRoutes />;
  };
  const renderContent = () => {
    // if (isLoading) {
    //   return <LoadingCentered />;
    // }
    if (env.IS_WEB) {
      return <BrowserRouter>{renderBrowserContent()}</BrowserRouter>;
    }
    return <HashRouter>{renderBrowserContent()}</HashRouter>;
  };
  return (
    <div className='App'>
      {renderContent()}
    </div>
  );
};

export default App;
