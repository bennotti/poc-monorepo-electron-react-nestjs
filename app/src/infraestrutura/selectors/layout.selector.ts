import { RootState } from '@infra/store';

export const selectCurrentLayout = (state: RootState): 'auth' | 'application' =>
  state.layout.layout;

export const selectIsSidebarCollapsed = (state: RootState): boolean =>
  state.layout.isSidebarCollapsed;
