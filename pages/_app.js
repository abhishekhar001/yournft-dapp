import Navigation from '../components/header/Navigation'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
<>
    <Navigation />
    <Component {...pageProps} />
    </>
    )
}

export default MyApp
