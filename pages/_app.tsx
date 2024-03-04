import 'antd/dist/antd.css';
import '../styles/antd-overrides.scss';
import '../styles/global.css';
import '../styles/index.scss';

import { Layout } from '@/components/feature/Layout/Layout';
import { AuthProvider } from '@/context/auth';
import { DataRenderProvider } from '@/context/data';
import LoaderProvider from '@/context/loader';
import { UserMenuProvider } from '@/context/menu';
import { AddGratitudeModalProvider, SignModalProvider } from '@/context/modal';
import ErrorBoundary from '@/hoc/error';

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
