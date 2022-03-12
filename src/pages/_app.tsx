import { ApolloProvider } from "@apollo/client"
import { Layout } from "components/layout"
import type { AppProps } from "next/app"
import { GlobalStyle } from "styles/global-style"
import apolloClient from "../lib/apollo"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp
