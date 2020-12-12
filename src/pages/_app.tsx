import '../styles/global.css'
import '../styles/footer.module.css'
import 'katex/dist/katex.css'
import Footer from '../components/footer'

export default ({ Component, pageProps }) => (
  <>
    <div className="wrap">
      <Component {...pageProps} />
      <Footer />
    </div>
  </>
)
