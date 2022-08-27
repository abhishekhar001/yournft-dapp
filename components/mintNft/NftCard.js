import Link from "next/link"
import styles from '../../styles/Home.module.css'


export default function NFTCard({name,short_name,data,id,status,contract,chain_id}) {
    
  return (
    <div className={styles.boxShadow_1} style={{border:"2px solid white", marginBottom:"1rem",padding:"1rem 6rem", textAlign:"center", borderRadius:"1rem"}}>
      <p>NFT id - {id}</p>
            <p>data - {data}</p>
            <p>Status - {status}</p>
            <p>chain address{chain_id}</p>
            <p>Contract address - {contract}</p>
            <p>name - {name} {" "} ({short_name})</p>
            <button className={styles.btn_main}>
                Transfer NFT
            </button>            
          </div>
  )
}
