import '../styles/globals.css'
import { ThirdwebWeb3Provider, ThirdwebWeb3ProviderProps } from '@3rdweb/hooks';
import type { AppProps } from 'next/app'

const thirdwebWeb3Props: ThirdwebWeb3ProviderProps = {
  supportedChainIds: [4],
  connectors: {
    injected: {},
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebWeb3Provider
      {...thirdwebWeb3Props}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  )
}

export default MyApp
