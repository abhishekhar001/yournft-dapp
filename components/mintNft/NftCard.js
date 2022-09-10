import Link from "next/link"
import styles from '../../styles/Home.module.css'


export default function NFTCard({ name, short_name, data, id, status, contract, chain_id,transaction_url }) {

  return (
    <div className={styles.boxShadow_1} style={{ border: "2px solid white", marginBottom: "1rem", padding: "1rem 6rem", textAlign: "center", borderRadius: "1rem" }}>

      <img 
      src={data}
        alt="Picture of the author"
        width="300" />
          <p>NFT id - {id}</p>
      <p>data - {data}</p>
      <p>chain address{chain_id}</p>
      <p>Contract address - {contract}</p>
      <p>name - {name} {" "} ({short_name})</p>
      {status === "pending"
      ?
      <>
      <p>
            Transaction is not verified yet
          </p>
      <Link href={transaction_url}>
      <a target="_blank" className={styles.btn_sub}>
        Verify now
      </a>
    </Link>
      <h6>after verifying please wait for sometime and refresh the page</h6>

       </>
    :
    <>
    <p>nft minted sucessfully</p>
      <button className={styles.btn_main}>
        Transfer NFT
      </button>
    </>

      }
    </div>
  )
}
