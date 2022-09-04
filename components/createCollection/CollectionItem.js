import Link from "next/link"
import styles from '../../styles/Home.module.css'


export default function CollectionItem({name,short_name,contract,status,chain_id}) {
    
  return (
    <div className={styles.boxShadow_1} style={{border:"2px solid white", marginBottom:"1rem",padding:"1rem 6rem", textAlign:"center", borderRadius:"1rem"}}>
            <p>name - {name} {" "} ({short_name})</p>
            {/* <p>Status - {status}</p> */}
            <p>chain id: {chain_id}</p>

            {!contract?
            <>
            <p>Contract address - {contract}</p>
            <Link href={`/mint/${contract}`}>
            <button className={styles.btn_sub}>
                Mint NFT
            </button>
            </Link>
            </>
                :
                <button className={styles.btn_sub}>
                    Not deployed yet (Pending)
                </button>
            }
          </div>
  )
}
