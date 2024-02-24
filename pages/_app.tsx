import "antd/dist/antd.css";
import "../styles/antd-overrides.scss";
import "../styles/index.scss";
import "../styles/global.css";

import { Layout } from "@/components/feature/Layout/Layout";

import { AuthProvider } from "Context/auth";
import LoaderProvider from "Context/loader";
import { SignModalProvider, AddGratitudeModalProvider } from "Context/modal";
import { DataRenderProvider } from "Context/data";
import { UserMenuProvider } from "Context/menu"
import ErrorBoundary from "HOC/error";

function SimpleGratitudes({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <LoaderProvider>
        <AuthProvider>
          <DataRenderProvider>
            <SignModalProvider>
              <AddGratitudeModalProvider>
                <UserMenuProvider>
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                </UserMenuProvider>
              </AddGratitudeModalProvider>
            </SignModalProvider>
          </DataRenderProvider>
        </AuthProvider>
      </LoaderProvider>
    </ErrorBoundary>
  );
}

export default SimpleGratitudes;
