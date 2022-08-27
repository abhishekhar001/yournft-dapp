import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { apikeystate } from '../atoms/apiStateMangment'
import { useRecoilState } from 'recoil'

const TransferNFT = () => {
  const [yourAPikey, setYourAPikey] = useRecoilState(apikeystate);

  return (
    <>
      <Head>
        <title>Transfer NFT</title>
      </Head>
      <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Transfer NFT
        </h1>

        {!yourAPikey&&
          <h3>Please first Generate API key. After that you can use other features.</h3>
          }
        </main>
      </div>
    </>
  )
}

export default TransferNFT
