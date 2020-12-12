import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <h1>盡人事聽天命</h1>
    </div>
  </>
)
