import Head from 'next/head'

import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import axios from 'axios';
import { apikeystate } from '../atoms/apiStateMangment'
import { useRecoilState } from 'recoil'
import CollectionItem from '../components/createCollection/CollectionItem';

const createcollection = () => {

  const [yourAPikey, setYourAPikey] = useRecoilState(apikeystate);

  const [allCollection, setAllCollection] = useState(null);

  const loadAllCollections =  async() => {
    const api = "https://thentic.tech/api/contracts";

    const values = {
      params:{
        key:yourAPikey,
        chain_id: 97
      }
    }
    const _res = await axios.get(api, values,{header:{"Content-Type":"application/json",key:yourAPikey,
    chain_id: 97}});

    console.log('====================================');
    console.log(_res.data.contracts);
    console.log('====================================');

    setAllCollection(_res.data.contracts)

  }

    const createCollectionHandler = async (e) => {
      e.preventDefault()

      if (!e.target.collectionsymbol.value || !e.target.collectionname.value) {
        return
      }
    
      const api = "https://thentic.tech/api/nfts/contract";
      const values = {
        key:yourAPikey,
        chain_id: 97,
        name:e.target.collectionname.value,
        short_name:e.target.collectionsymbol.value

      }
      const _res = await axios.post(api, values);

      console.log('====================================');
      console.log(_res);
      console.log('====================================');
      loadAllCollections()
    }

    useEffect(() => {
      if (yourAPikey) {
        loadAllCollections()
      }
    }, [yourAPikey])
    



  return (
    <>
      <Head>
        <title>Create collection</title>
      </Head>
      <div>
        <main className={styles.main}>
        <h1 className={styles.title}>
          Create New Collections
        </h1>
        <section>
          <h4>Fill these Details</h4>
          <form onSubmit={createCollectionHandler}>
            <label htmlFor="collectionname">Collection Name</label>
            <input type="text" name='collectionname' />
            <label htmlFor="collectionsymbol">Collection Symbol</label>
            <input type="text" name='collectionsymbol' />
            <button type='submit'>Create Collection</button>
          </form>
        </section>

        <section>
          <h1>Your all collections</h1>
          {allCollection&& allCollection.map((item,key)=>{
            return(
              <CollectionItem key={key} name={item.name} short_name={item.short_name} status={item.status} contract={item.contract} chain_id={item.chain_id} />
            )
          })}
        </section>
          <button></button>
        </main>
      </div>
    </>
  )
}

export default createcollection
