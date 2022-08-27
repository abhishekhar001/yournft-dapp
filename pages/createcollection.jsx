import Head from 'next/head'

import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import axios from 'axios';
import { apikeystate } from '../atoms/apiStateMangment'
import { useRecoilState } from 'recoil'
import CollectionItem from '../components/createCollection/CollectionItem';

const Createcollection = () => {

  const [yourAPikey, setYourAPikey] = useRecoilState(apikeystate);
  const [allCollection, setAllCollection] = useState(null);

  const [loadingCollection, setLoadingCollection] = useState(true);
  const [loadingCreateColletion, setLoadingCreateColletion] = useState(false)

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
    console.log(_res.data);
    console.log('====================================');
    setAllCollection(_res.data.contracts)
    setLoadingCollection(false);

  }

    const createCollectionHandler = async (e) => {
      e.preventDefault()
      setLoadingCreateColletion(true)

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
      setLoadingCreateColletion(false)
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
        {!yourAPikey&&
          <h3>Please first Generate API key. After that you can use other features.</h3>
          }
        <section>
          <form onSubmit={createCollectionHandler} style={{marginTop:"2rem"}}>
            <input className={styles.input_box_main} type="text" name='collectionname' placeholder='Collection Name' />
            <input className={styles.input_box_main} type="text" name='collectionsymbol' placeholder='Collection Symbol' />
            
            <button  className={styles.btn_main} type='submit'>{loadingCreateColletion? "Creating...": "Create Collection"}</button>
          </form>
        </section>
        <section style={{textAlign:"center"}}>
          <h1>Your all collections</h1>
          {loadingCollection?
          <div className={styles.loader_1}></div>
          :
          allCollection&& allCollection.map((item,key)=>{
            return(
              <CollectionItem key={key} name={item.name} short_name={item.short_name} status={item.status} contract={item.contract} chain_id={item.chain_id} />
            )
          })}
        </section>
        </main>
      </div>
    </>
  )
}

export default Createcollection
