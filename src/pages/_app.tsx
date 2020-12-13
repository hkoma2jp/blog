import { FC, useEffect } from 'react'
import { AppProps } from 'next/app'
import '../styles/global.css'
import '../styles/footer.module.css'
import 'katex/dist/katex.css'
import Footer from '../components/footer'
import TagManager from 'react-gtm-module'

const AppComponent: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  // Google Tag Manager
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-KBCTQJ7' })
  }, [])

  return (
    <>
      <div className="wrap">
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}
export default AppComponent
