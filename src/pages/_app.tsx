import Layout from "@/Components/Layout";
import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { MyGlobalContext } from "../../context/UsernameContext";

export default function App({ Component, pageProps }: AppProps) {
  const [username, setUsername] = useState<string>("");
  return (
    <MyGlobalContext.Provider value={{ setUsername, username }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MyGlobalContext.Provider>
  );
}
