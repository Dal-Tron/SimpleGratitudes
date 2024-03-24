import 'antd/dist/antd.css';
import '../styles/antd-overrides.scss';
import '../styles/global.css';
import '../styles/index.scss';

import { SpinLoading } from '@/components/base/Loading/SpinLoading';
import { Layout } from '@/components/feature/Layout/Layout';
import { AuthProvider } from '@/context/auth';
import { DataRenderProvider } from '@/context/data';
import LoaderProvider from '@/context/loader';
import { UserMenuProvider } from '@/context/menu';
import { AddGratitudeModalProvider, SignModalProvider } from '@/context/modal';
import ErrorBoundary from '@/hoc/error';
import { useHydrateStores } from '@/hooks/useHydrateStores';

function SimpleGratitudes({ Component, pageProps }) {
  const hasHydrated = useHydrateStores();

  if (!hasHydrated) {
    return (
      <div className="flex justify-center items-center h-screen">
        <SpinLoading />
      </div>
    );
  }

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
