import styles from '../../styles/Home.module.css'

import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className={styles.navContainer}>
                <p className={styles.navHeading}>
                    Your NFTs Collections
                </p>

                

                <ul className={styles.navContainerul}>
                    <li className={styles.navContainerli}>
                    <Link href="/getapi">
                        <a className={styles.navContainera} >API key</a>
                    </Link>
                    </li>
                    <li className={styles.navContainerli}>
                        <a className={styles.navContainera} href="#">Create Collection</a>
                    </li>
                    <li className={styles.navContainerli}>
                        <a className={styles.navContainera} href="#">Mint NFTs</a>
                    </li>
                    <li className={styles.navContainerli}>
                        <a className={styles.navContainera} href="#">Transfer NFT</a>
                    </li>
                </ul>
            </nav>
  )
}
