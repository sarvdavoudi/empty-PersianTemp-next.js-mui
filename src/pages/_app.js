import Layout from "@/components/Layout/Layout";
import store from "@/redux/store";
import "@/styles/globals.css";
import { ThemeProvider } from "@/styles/theme";
import { CacheProvider } from "@emotion/react";
import { Provider } from "react-redux";
import rtlCache from "./lib/rtlCache";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CacheProvider value={rtlCache}>
        <Provider store={store}>
          <ThemeProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </Provider>
      </CacheProvider>
    </>
  );
}
