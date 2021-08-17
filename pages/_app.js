import 'antd/dist/antd.css'
import '../styles/antd-overrides.scss'
import '../styles/index.scss'

import Layout from 'Components/Layout'
import { AuthProvider } from 'Context/auth'
import { SignModalProvider, AddGratitudeModalProvider } from 'Context/modal'
import { DataProvider } from 'Context/data'

function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <DataProvider>
        <SignModalProvider>
          <AddGratitudeModalProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AddGratitudeModalProvider>
        </SignModalProvider>
      </DataProvider>
    </AuthProvider>
  );
}

export default App
