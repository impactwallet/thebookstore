import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useState } from "react";
import Navbar from "../components/navbar";
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

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
  return (
    <>
      <ChakraProvider theme={theme}>
        <ProductContext.Provider value={{ prod, setProd }}>
          <Component {...pageProps} />
        </ProductContext.Provider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
