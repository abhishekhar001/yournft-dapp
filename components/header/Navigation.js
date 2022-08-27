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
                    <Link href="/getapi">
                        <a className={styles.navContainera} >API key {yourAPikey&& `(${yourAPikey.substring(0,6)}...)`}</a>
                    </Link>
                    </li>
                    <li className={styles.navContainerli}>
                    <Link href="/createcollection">
                        <a className={styles.navContainera} href="#">Create Collection</a>
                        </Link>
                    </li>
                    <li className={styles.navContainerli}>
                    <Link href="/allNfts">
                        <a className={styles.navContainera} href="#">All NFTs</a>
                    </Link>
                    </li>
                    <li className={styles.navContainerli}>
                    <Link href="/transfernft">
                        <a className={styles.navContainera} href="#">Transfer NFT</a>
                    </Link>
                    </li>
                </ul>
            </nav>
  )
}
