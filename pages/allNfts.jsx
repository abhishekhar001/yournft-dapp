import Head from 'next/head'

import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import axios from 'axios';
import { apikeystate } from '../atoms/apiStateMangment'
import { useRecoilState } from 'recoil'
import CollectionItem from '../components/createCollection/CollectionItem';
import NFTCard from '../components/mintNft/NftCard';

const allNfts = () => {

  const [yourAPikey, setYourAPikey] = useRecoilState(apikeystate);

  const [allNfts, setAllNfts] = useState(null);

  const loadAllNftss =  async() => {
    const api = "https://thentic.tech/api/nfts";

    const values = {
      params:{
        key:yourAPikey,
        chain_id: 97
      }
    }
    const _res = await axios.get(api, values,{header:{"Content-Type":"application/json",key:yourAPikey,
    chain_id: 97}});

    console.log('====================================');
    console.log(_res);
    console.log('====================================');

    // setAllNfts(_res.data.contracts)

  }


    useEffect(() => {
      if (yourAPikey) {
        loadAllNftss()
      }
    }, [yourAPikey])
    



  return (
    <>
      <Head>
        <title>All collection</title>
      </Head>
      <div>
        <main className={styles.main}>
        <h1 className={styles.title}>
          Your All Nfts
        </h1>
        {/* <section>
          <h4>Fill these Details</h4>
          <form onSubmit={createCollectionHandler}>
            <label htmlFor="collectionname">Collection Name</label>
            <input type="text" name='collectionname' />
            <label htmlFor="collectionsymbol">Collection Symbol</label>
            <input type="text" name='collectionsymbol' />
            <button type='submit'>Create Collection</button>
          </form>
        </section> */}

        <section>
          {allNfts&& allNfts.map((item,key)=>{
            return(
              <NFTCard key={key} name={item.name} data={item.data} id={item.id}short_name={item.short_name} status={item.status} contract={item.contract} chain_id={item.chain_id} />
            )
          })}
        </section>
          <button></button>
        </main>
      </div>
    </>
  )
}

export default allNfts
