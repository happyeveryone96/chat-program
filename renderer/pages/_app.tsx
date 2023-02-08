import React from "react";
import type { AppProps } from "next/app";
import GlobalStyles from "../styles/GlobalStyles";

function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Component {...pageProps} />
      <GlobalStyles />
    </React.Fragment>
  );
}

export default App;
