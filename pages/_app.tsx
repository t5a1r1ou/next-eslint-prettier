import "../styles/globals.css";

import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [state] = useState();
  useEffect(() => {
    if (state) return;
  }, [state]);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
