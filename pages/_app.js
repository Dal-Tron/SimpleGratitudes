import 'antd/dist/antd.css'
import '../styles/antd-overrides.scss'
import '../styles/index.scss'

import Layout from 'Components/Layout'

import AuthProvider from 'Context/auth'
import LoaderProvider from 'Context/loader'
import { SignModalProvider, AddGratitudeModalProvider } from 'Context/modal'
import { DataRenderProvider } from 'Context/data'

function SimpleGratitudes({ Component, pageProps }) {
  return (
    <LoaderProvider>
      <AuthProvider>
        <DataRenderProvider>
          <SignModalProvider>
            <AddGratitudeModalProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </AddGratitudeModalProvider>
          </SignModalProvider>
        </DataRenderProvider>
      </AuthProvider>
    </LoaderProvider>
  );
}

export default SimpleGratitudes
