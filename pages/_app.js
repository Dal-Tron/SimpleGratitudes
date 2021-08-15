import 'antd/dist/antd.css'
import '../styles/antd-overrides.scss'
import '../styles/index.scss'

import Layout from 'Components/Layout'
import { AuthProvider } from 'Context/auth'
import { SignModalProvider, AddGratitudeModalProvider } from 'Context/modal'

function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <SignModalProvider>
        <AddGratitudeModalProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AddGratitudeModalProvider>
      </SignModalProvider>
    </AuthProvider>
  );
}

export default App
