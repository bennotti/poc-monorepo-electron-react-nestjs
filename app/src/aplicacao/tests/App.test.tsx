// Imports
// To Test
import App from '@app/app-main';
import { render } from '@testing-library/react';
import * as redux from 'react-redux';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';
import store from '@infra/store';

// Tests
test('Renders main page correctly', () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // deprecated
      removeListener: vi.fn(), // deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });

  // Setup
  render(
    <Provider store={store}>
      <ConfigProvider locale={ptBR}>
        <App />
      </ConfigProvider>
    </Provider>
  );

  // Pre Expecations

  // Init

  // Post Expectations
  expect(true).toBeTruthy();
});
