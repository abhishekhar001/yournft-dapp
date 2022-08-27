import axios from 'axios';
import Head from 'next/head'
import { useState } from 'react';
import styles from '../styles/Home.module.css'

import { apikeystate } from '../atoms/apiStateMangment'
import { useRecoilState } from 'recoil'


const getapi = () => {
    const [yourAPikey, setYourAPikey] = useRecoilState(apikeystate);

    const [apiGeneratingLoading, setApiGeneratingLoading] = useState(false)


    const generateAPI = async () => {
      setApiGeneratingLoading(true)
      const url = "https://thentic.tech/api/key"
      
      const _api = await axios.get(url);
      
      localStorage.setItem('apikey', _api.data);
      setYourAPikey(_api.data)
      setApiGeneratingLoading(false)
    }

  return (
    <>
      <Head>
        <title>Get api</title>
      </Head>
      <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Generate Your <span>API Key</span>
        </h1>

        <p className={styles.description}>
          Using these api you can Create, Mint or trade NFT{' '}
          <code className={styles.code}>Directly</code>
        </p>

        <section style={{textAlign:'center'}}>
            <button className={styles.btn_main} onClick={generateAPI}>
                Generate {yourAPikey && "New"} API
            </button>
            {yourAPikey?
            <p>Your current API: {yourAPikey}</p>
            :
            <p>Please generate API. You don't have any api yet</p>
            }

        </section>
            <div style={{visibility:apiGeneratingLoading?"visible":"hidden"}} className={styles.loader_1}></div>
        
        </main>
      </div>
    </>
  )
}

export default getapi
