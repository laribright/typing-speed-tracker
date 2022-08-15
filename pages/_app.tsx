import type { AppProps } from "next/app";
import { store } from "../store";
import { Provider } from "react-redux";

import "../styles/globals.css";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
