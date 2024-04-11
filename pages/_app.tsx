import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useState } from "react";
import Navbar from "../components/navbar";
import Paywall from "../components/paywall";
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import cn from 'classnames';
import axios from 'axios';

export const ProductContext = createContext<any>(null);

const theme = extendTheme({
  colors: {
    brand: {
      500: "#4F46E5",
    }
  }
});


function MyApp({ Component, pageProps }: AppProps) {
  const [prod, setProd] = useState<any[]>([]);
  const [token, setToken] = useState<string | null>(null);

  return (
    <>
      <ChakraProvider theme={theme}>
        <ProductContext.Provider value={{ prod, setProd }}>
          {
            !token && <div className="blocker">
              <Paywall onSignIn={(a: string) => setToken(a)}></Paywall>
            </div>
          }
          <div className={cn({ 'blured': !token })}>
            <Component {...pageProps} />
          </div>
        </ProductContext.Provider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
