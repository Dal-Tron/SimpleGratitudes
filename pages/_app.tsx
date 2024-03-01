import 'antd/dist/antd.css';
import '../styles/antd-overrides.scss';
import '../styles/global.css';
import '../styles/index.scss';

import { Layout } from '@/components/feature/Layout/Layout';
import { AuthProvider } from 'Context/auth';
import { DataRenderProvider } from 'Context/data';
import LoaderProvider from 'Context/loader';
import { UserMenuProvider } from 'Context/menu';
import { AddGratitudeModalProvider, SignModalProvider } from 'Context/modal';
import ErrorBoundary from 'HOC/error';

function SimpleGratitudes({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <LoaderProvider>
        <AuthProvider>
          <SignModalProvider>
            <DataRenderProvider>
              <AddGratitudeModalProvider>
                <UserMenuProvider>
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                </UserMenuProvider>
              </AddGratitudeModalProvider>
            </DataRenderProvider>
          </SignModalProvider>
        </AuthProvider>
      </LoaderProvider>
    </ErrorBoundary>
  );
}

export default SimpleGratitudes;
