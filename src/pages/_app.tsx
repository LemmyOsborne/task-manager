import { ApolloProvider } from "@apollo/client"
import { Layout } from "components/layout"
import type { AppProps } from "next/app"
import { GlobalStyle } from "styles/global-style"
import apolloClient from "../lib/apollo"
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={apolloClient}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </SessionProvider>
  )
}

export default MyApp
