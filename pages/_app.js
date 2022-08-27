import Navigation from '../components/header/Navigation'
import '../styles/globals.css'
import { RecoilRoot,useRecoilState } from 'recoil'
import { useEffect } from 'react';
import { apikeystate } from '../atoms/apiStateMangment'


function MyApp({ Component, pageProps }) {
  
  return (
    <RecoilRoot>
      <Navigation />
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
