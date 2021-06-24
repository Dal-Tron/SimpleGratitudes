import '../styles/index.scss'
import 'antd/dist/antd.css'
import '../styles/antd-overrides.scss'
import { AuthProvider } from 'Context/auth'

function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default App
