import Head from 'next/head'

import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import axios from 'axios';
import { apikeystate } from '../atoms/apiStateMangment'
import { useRecoilState } from 'recoil'

import {useRouter} from 'next/router'
import NFTCard from '../components/mintNft/NftCard';

const allNFTs = () => {

  const [yourAPikey, setYourAPikey] = useRecoilState(apikeystate);
  const [loadingAllNFTs, setLoadingAllNFTs] = useState(true);
  const [allNFTs, setAllNFTs] = useState([]);

  const loadAllNFTs =  async() => {
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
    console.log(_res.data);
    console.log('====================================');
    setAllNFTs(_res.data.nfts)
    setLoadingAllNFTs(false);

  }


    useEffect(() => {
      if (yourAPikey) {
        loadAllNFTs()
      }
    }, [yourAPikey])
    



  return (
    <>
      <Head>
        <title>All your NFT</title>
      </Head>
      <div>
        <main className={styles.main}>
        <h1 className={styles.title}>
          Your All NFTS
        </h1>
       
        <section style={{textAlign:"center"}}>
          {loadingAllNFTs?
          <div className={styles.loader_1}></div>
          :
          allNFTs.length !== 0?
          allNFTs.map((item,key)=>{
            return(
              <NFTCard key={key} name={item.name} data={item.data} id={item.id}short_name={item.short_name} status={item.status} contract={item.contract} chain_id={item.chain_id} />
              )
            })
            :
            <p>You have't mint nfts yet</p>
          }
        </section>
        </main>
      </div>
    </>
  )
}

export default allNFTs
