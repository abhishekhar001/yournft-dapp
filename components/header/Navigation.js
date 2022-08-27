import styles from '../../styles/Home.module.css'
import Link from 'next/link';
import { useRecoilState } from 'recoil'
import { apikeystate } from '../../atoms/apiStateMangment'
import { useEffect } from 'react';



export default function Navigation() {

    const [yourAPikey, setYourAPikey] = useRecoilState(apikeystate);

  useEffect(() => {
    setYourAPikey(localStorage.getItem('apikey'))
  }, [])
  
    
  return (
    <nav className={styles.navContainer}>
                    <Link href="/">
                <p className={styles.navHeading}>
                    Your NFTs Collections
                </p>
                </Link>


                <ul className={styles.navContainerul}>
                    <li className={styles.navContainerli}>
                    <Link href="/Getapi">
                        <a className={styles.navContainera} > {yourAPikey?  `API key(${yourAPikey.substring(0,6)}...)`:"Generate API key"}</a>
                    </Link>
                    </li>
                    <li className={styles.navContainerli}>
                    <Link href="/Createcollection">
                        <a className={styles.navContainera} href="#">Create Collection</a>
                        </Link>
                    </li>
                    <li className={styles.navContainerli}>
                    <Link href="/AllNfts">
                        <a className={styles.navContainera} href="#">All NFTs</a>
                    </Link>
                    </li>
                    <li className={styles.navContainerli}>
                    <Link href="/TransferNft">
                        <a className={styles.navContainera} href="#">Transfer NFT</a>
                    </Link>
                    </li>
                </ul>
            </nav>
  )
}
