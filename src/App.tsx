import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/routes';
import { AsideMenu } from './components';
import { Layout } from '@neogrid/design-system';
import { UserLocaleProvider, I18nMessagesProvider } from '@neogrid/i18n';
import 'antd/dist/antd.min.css';

export const App = () => {
  return (
    <BrowserRouter>
      <UserLocaleProvider>
        <I18nMessagesProvider
          locales={{
            pt: () => import('./i18n/pt.json'),
            es: () => import('./i18n/es.json'),
            en: () => import('./i18n/en.json')
          }}
        >
          <Layout headerIsFixed>
            <AsideMenu />

            <AppRoutes />
          </Layout>
        </I18nMessagesProvider>
      </UserLocaleProvider>
    </BrowserRouter>
  );
};
