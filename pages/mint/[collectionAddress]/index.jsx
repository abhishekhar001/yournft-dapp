import Head from 'next/head'

import { useState, useEffect } from 'react';
import styles from '../../../styles/Home.module.css'
import axios from 'axios';
import { apikeystate } from '../../../atoms/apiStateMangment'
import { useRecoilState } from 'recoil'
import CollectionItem from '../../../components/createCollection/CollectionItem';

import {useRouter} from 'next/router'
import NFTCard from '../../../components/mintNft/NftCard';

const MintNfts = () => {

  const [yourAPikey, setYourAPikey] = useRecoilState(apikeystate);

  const [loadingMintNFT, setLoadingMintNFT] = useState(false);
  const [loadingAllNFTs, setLoadingAllNFTs] = useState(true);

  const [allNFTs, setAllNFTs] = useState([]);

  const {collectionAddress} = useRouter();

//   <NFTCard key={key} name={item.name} data={item.data} id={item.id}short_name={item.short_name} status={item.status} contract={item.contract} chain_id={item.chain_id} />

  const _demonft = {
    name:"nft nameee",
    data:"url data",
    id:"7",
    name:"collectionName",
    short_name:"short name",
    status:"pending",
    contract:collectionAddress,
    chain_id:93
  }
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

    const MintHandler = async (e) => {
      e.preventDefault()
      setLoadingMintNFT(true)

      if (!e.target.nft_id.value || !e.target.nft_data.value || !e.target.mint_to.value) {
        return
      }

      const api = "https://thentic.tech/api/nfts/mint";
      const values = {
        key:yourAPikey,
        chain_id: 97,
        contract:collectionAddress,
        nft_id:e.target.nft_id.value,
        nft_data:e.target.nft_data.value,
        to:e.target.nft_data.mint_to,

      }
      const _res = await axios.post(api, values);
      setLoadingMintNFT(false)
      loadAllNFTs()
    }

    useEffect(() => {
      if (yourAPikey) {
        loadAllNFTs()
      }
    }, [yourAPikey])
    



  return (
    <>
      <Head>
        <title>Mint NFT</title>
      </Head>
      <div>
        <main className={styles.main}>
        <h1 className={styles.title}>
          Mint NFT for Collection
        </h1>
        <p>{collectionAddress}</p>

        {!yourAPikey&&
          <h3>Please first Generate API key. After that you can use other features.</h3>
          }
        <section>
          <form onSubmit={MintHandler} style={{marginTop:"2rem"}}>
            <input className={styles.input_box_main} type="text" name='nft_id' placeholder='NFT id' />
            <input className={styles.input_box_main} type="text" name='nft_data' placeholder='NFT Data' />
            <input className={styles.input_box_main} type="text" name='mint_to' placeholder='User Wallet address' />
            
            <button  className={styles.btn_main} type='submit'>{loadingMintNFT? "Minting...": "Mint NFT"}</button>
          </form>
        </section>
        <section style={{textAlign:"center"}}>
          <h1>Your all NFTs</h1>
          {loadingAllNFTs?
          <div className={styles.loader_1}></div>
          :
          allNFTs.length !== 0? allNFTs.map((item,key)=>{
            return(
              <NFTCard key={key} name={item.name} data={item.data} id={item.id}short_name={item.short_name} status={item.status} contract={item.contract} chain_id={item.chain_id} />
            )
          }):
          <p>You have not any nfts</p>
          }
        </section>
        </main>
      </div>
    </>
  )
}

export default MintNfts
