// import { tryLogin, tryLogout, tryRefreshToken, tryRestoreAuth, tryRestoreSettings } from '@modulos/seguranca/thunks/autenticacao.thunk';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LayoutState {
  layout: 'auth' | 'application';
  isSidebarCollapsed: boolean;
}

const layoutSlice = createSlice({
  initialState: {
    layout: 'application',
    isSidebarCollapsed: false,
  } as LayoutState,
  name: 'layout',
  reducers: {
    updateLayout(state, action: PayloadAction<'auth' | 'application'>) {
      state.layout = action.payload;
    },
    toggleSidebar(state) {
      state.isSidebarCollapsed = !state.isSidebarCollapsed;
    },
  },
  extraReducers(builder) {
    // builder.addCase(tryLogin.fulfilled, state => {
    //   state.layout = 'application';
    // });

    // builder.addCase(tryRestoreSettings.fulfilled, state => {
    //   state.layout = 'application';
    // });

    // builder.addCase(tryRestoreAuth.fulfilled, state => {
    //   state.layout = 'application';
    // });

    // builder.addCase(tryLogout.fulfilled, state => {
    //   state.layout = 'auth';
    // });

    // builder.addCase(tryRefreshToken.rejected, state => {
    //   state.layout = 'auth';
    // });

    // builder.addCase(tryRestoreAuth.rejected, state => {
    //   state.layout = 'auth';
    // });

    // builder.addCase(tryRestoreSettings.rejected, state => {
    //   state.layout = 'auth';
    // });

    // builder.addCase(tryLogin.rejected, state => {
    //   state.layout = 'auth';
    // });
  },
});

export const layoutReducer = layoutSlice.reducer;

export const { updateLayout, toggleSidebar } = layoutSlice.actions;
