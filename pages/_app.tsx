import '../styles/globals.css'
import type { AppProps } from 'next/app'
function SafeHydrate(props: { children: React.ReactNode }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : props.children}
    </div>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
